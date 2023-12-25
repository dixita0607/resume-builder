import React from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useResume } from "../hooks/resumes";

export default function Resume() {
  const { id } = useParams();

  const { resume } = useResume(id);

  return (
    <>
      <Header />
      <h1>{resume?.title}</h1>
      <Editor />
      <Preview />
    </>
  );
}
