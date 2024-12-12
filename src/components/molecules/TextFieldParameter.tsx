import { Flex, Popover, Text, TextField } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { z } from "zod";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

interface TextFieldParameterProps {
  id?: string;
  label: string;
  info?: React.ReactNode;
  warning?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isDisabled?: boolean;
  validationSchema?: z.ZodString;
}

function TextFieldParameter(props: TextFieldParameterProps) {
  const {
    id,
    label,
    info,
    warning,
    value,
    onChange,
    placeholder,
    isDisabled,
    validationSchema,
  } = props;

  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!validationSchema) {
      return;
    }

    try {
      validationSchema.parse(value);

      setErrorMessage("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrorMessage(error.issues[0].message);
      }
    }
  }, [validationSchema, value]);

  const hasWarning = !!warning;
  const hasInfo = !!info;
  const hasErrorMessage = !!errorMessage;

  return (
    <Flex direction="column" gap="1">
      <Flex gap="1" align="center">
        <Text as="label" size="2" htmlFor={id}>
          {label}
        </Text>

        {hasInfo && (
          <Popover.Root>
            <Popover.Trigger>
              <InfoCircledIcon color="gray" />
            </Popover.Trigger>
            <Popover.Content maxWidth="350px">{info}</Popover.Content>
          </Popover.Root>
        )}
        {hasWarning && (
          <Popover.Root>
            <Popover.Trigger>
              <ExclamationTriangleIcon color="orange" />
            </Popover.Trigger>
            <Popover.Content maxWidth="350px">{warning}</Popover.Content>
          </Popover.Root>
        )}
        {hasErrorMessage && (
          <Popover.Root>
            <Popover.Trigger>
              <ExclamationTriangleIcon color="red" />
            </Popover.Trigger>
            <Popover.Content maxWidth="350px">
              <Text size="2">{errorMessage}</Text>
            </Popover.Content>
          </Popover.Root>
        )}
      </Flex>

      <TextField.Root
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        color={hasErrorMessage ? "red" : "gray"}
        size="1"
      />
    </Flex>
  );
}

export default TextFieldParameter;
