import { ActionIcon } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import React from "react";
import { IconCopy, IconChecks } from "@tabler/icons-react";

type Props = {
  contrast: string;
  color: string;
};

export const CopyBtn = ({ contrast, color }: Props) => {
  const clipboard = useClipboard({ timeout: 500 });

  const iconStyles = {
    width: "70%",
    height: "70%",
    stroke: "1.5",
    color: contrast,
  };

  return (
    <ActionIcon
      variant="light"
      aria-label={clipboard.copied ? "Copied" : "Copy to clipboard"}
      color={contrast}
      onClick={() => clipboard.copy(color)}
    >
      {clipboard.copied ? (
        <IconChecks style={iconStyles} />
      ) : (
        <IconCopy style={iconStyles} />
      )}
    </ActionIcon>
  );
};
