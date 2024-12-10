import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { FallbackProps } from "react-error-boundary";

import FallbackTemplate from "~/components/templates/FallbackTemplate";

interface ErrorScreenProps {
  error: FallbackProps["error"];
}

function ErrorScreen(props: ErrorScreenProps) {
  const { error } = props;

  return (
    <FallbackTemplate
      icon={<ExclamationTriangleIcon color="red" />}
      text={error?.message}
    />
  );
}

export default ErrorScreen;
