import React from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

export default function Resume() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <h1>{id}</h1>
      <Editor />
      <Preview />
    </>
  );
}
