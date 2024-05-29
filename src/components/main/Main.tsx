import React, { ReactNode } from "react";
import Styles from "./style.module.css";

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => {
  return <main className={`${Styles.container}`}>{children}</main>;
};
