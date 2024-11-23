import { Flex, Text, TextField, Tooltip } from "@radix-ui/themes";
import { useState } from "react";
import { z } from "zod";
import { InfoCircledIcon } from "@radix-ui/react-icons";

interface TextFieldParameterProps {
  id?: string;
  label: string;
  tooltip?: string;
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
    tooltip,
    value,
    onChange,
    placeholder,
    isDisabled,
    validationSchema,
  } = props;

  const [errorMessage, setErrorMessage] = useState<string>("");

  const hasTooltip = !!tooltip;
  const hasErrorMessage = !!errorMessage;

  return (
    <Flex direction="column" gap="1">
      <Flex gap="1" align="center">
        <Text as="label" size="2" htmlFor={id}>
          {label}
        </Text>

        {hasTooltip && (
          <Tooltip content={tooltip}>
            <InfoCircledIcon color="gray" />
          </Tooltip>
        )}
      </Flex>

      <TextField.Root
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={isDisabled}
        color={hasErrorMessage ? "red" : "gray"}
        size="1"
      />
      {hasErrorMessage && (
        <Text size="1" color="red">
          {errorMessage}
        </Text>
      )}
    </Flex>
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    onChange(event);

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
  }
}

export default TextFieldParameter;
