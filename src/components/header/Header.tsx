import React, { ReactNode } from "react";
import Styles from './style.module.css'

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  return <header className={Styles.header}>{children}</header>;
};
