import React from "react";
import OnePage from "./themes/OnePage/OnePage";

export default function Preview({ data, theme }) {
  switch (theme) {
    default:
      return <OnePage resume={data} />;
  }
}
