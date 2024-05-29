"use client";
import React, { useState } from "react";
import { ColorInput } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";
import { useDidUpdate } from "@mantine/hooks";
import Styles from "./style.module.css";

export const InputColor = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const colorFromUrl = searchParams.get("color") || "";

  const [color, setColor] = useState(`#${colorFromUrl}`);

  const handleChange = (color: string) => {
    setColor(color);
  };

  useDidUpdate(() => {
    const newColor = color.startsWith("#") ? color.substring(1) : color;

    router.push(`/color?color=${newColor}`);
  }, [color]);

  return (
    <ColorInput
      className={Styles.wrapper}
      label="Pick color"
      placeholder="Pick color"
      value={color}
      onChange={handleChange}
    />
  );
};
