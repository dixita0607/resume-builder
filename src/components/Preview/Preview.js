import React from "react";
import OnePage from "./themes/OnePage/OnePage";
import styles from "./Preview.module.css";

export default function Preview({ data, theme }) {
  let preview = null;

  switch (theme) {
    default:
      preview = <OnePage resume={data} />;
  }

  return (
    <section className={styles.container}>
      <button type="button" onClick={() => window.print()}>
        Print
      </button>
      {preview}
    </section>
  );
}
