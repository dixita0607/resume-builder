import React from "react";

export default function Preview({ data }) {
  return <>{JSON.stringify(data)}</>;
}
