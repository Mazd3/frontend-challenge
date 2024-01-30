import React from "react";

import styles from "./CatsNotFound.module.css";

export function CatsNotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.message}>Здесь котиков нет :(</h1>
    </div>
  );
}
