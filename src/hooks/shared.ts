import { useState, useCallback, useEffect, useLayoutEffect } from "react";

/*
 * Source: https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/*
 * Source: https://usehooks-ts.com/react-hook/use-media-query
 */
type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  // Handles the change event of the media query.
  function handleChange() {
    setMatches(getMatches(query));
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}

/*
 * Source: https://usehooks-ts.com/react-hook/use-copy-to-clipboard
 */
type CopiedValue = string | null;

type CopyFn = (text: string) => Promise<boolean>;

export function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  }, []);

  return [copiedText, copy];
}

/*
 * Source: https://novajs.co/react-hook-download
 */
export const useDownload = () => {
  const [error, setError] = useState<Error | unknown | null>(null);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number | null>(null);

  const handleResponse = async (response: Response): Promise<string> => {
    if (!response.ok) {
      throw new Error("Could not download file");
    }

    const contentLength = response.headers.get("content-length");
    const reader = response.clone().body?.getReader();

    if (!contentLength || !reader) {
      const blob = await response.blob();

      return createBlobURL(blob);
    }

    const stream = await getStream(contentLength, reader);
    const newResponse = new Response(stream);
    const blob = await newResponse.blob();

    return createBlobURL(blob);
  };

  const getStream = async (
    contentLength: string,
    reader: ReadableStreamDefaultReader<Uint8Array>
  ): Promise<ReadableStream<Uint8Array>> => {
    let loaded = 0;
    const total = parseInt(contentLength, 10);

    return new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for (;;) {
            const { done, value } = await reader.read();

            if (done) break;

            loaded += value.byteLength;
            const percentage = Math.trunc((loaded / total) * 100);
            setProgress(percentage);
            controller.enqueue(value);
          }
        } catch (error) {
          controller.error(error);
          throw error;
        } finally {
          controller.close();
        }
      },
    });
  };

  const createBlobURL = (blob: Blob): string => {
    return window.URL.createObjectURL(blob);
  };

  const handleDownload = (fileName: string, url: string) => {
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const downloadFile = async (fileName: string, fileUrl: string) => {
    setIsDownloading(true);
    setError(null);
    setProgress(null);

    try {
      const response = await fetch(fileUrl);
      const url = await handleResponse(response);

      handleDownload(fileName, url);
    } catch (error) {
      setError(error);
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    error,
    isDownloading,
    progress,
    downloadFile,
  };
};
