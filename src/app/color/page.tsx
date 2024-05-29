import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";
import { Main } from "@/components/main/Main";
import { redirect } from "next/navigation";
import React from "react";
import Values from "values.js";

interface SearchParamsType {
  color?: string;
}

export default function Color({
  searchParams,
}: {
  searchParams?: SearchParamsType;
}) {
  const { color } = searchParams || {};
  const regexp = /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

  if (!color || !regexp.test(color)) {
    redirect("/");
  }

  const colors = new Values(`#${color}`).all(13);

  const colorObj = colors.map((color) => ({
    color: color.hex,
    weight: color.weight,
    brightness: color.getBrightness(),
    type: color.type,
  }));

  return (
    <>
      <Header />
      <Main>
        {colorObj.map((color, index) => (
          <Card details={color} key={index} />
        ))}
      </Main>
    </>
  );
}
