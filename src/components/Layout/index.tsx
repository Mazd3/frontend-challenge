import React from "react";
import { Header } from "../Header";

import styles from "./Layout.module.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
