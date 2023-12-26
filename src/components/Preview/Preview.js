import React from "react";
import OnePage from "./themes/OnePage/OnePage";
import styles from "./Preview.module.css";
import OnePagePride from "./themes/OnePagePride/OnePagePride";

export default function Preview({ data }) {
  let preview = null;

  switch (data.meta.theme) {
    case "onepagePride":
      preview = <OnePagePride resume={data} />;
      break;
    default:
      preview = <OnePage resume={data} />;
      break;
  }

  return (
    <section className={styles.container}>
      <button
        className={styles.print}
        type="button"
        onClick={() => window.print()}
      >
        Print - {data.meta.theme}
      </button>
      {preview}
    </section>
  );
}
