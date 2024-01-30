import React from "react";

import styles from "./CatContainer.module.css";

export function CatContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
