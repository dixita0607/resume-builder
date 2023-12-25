import React from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useResume } from "../hooks/resumes";

export default function Resume() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { resume, setResume, save } = useResume(id);

  const handleSave = () => {
    save();
    navigate(-1);
  };
  const handleCancel = () => navigate(-1);

  return (
    <>
      <Header />
      <h1>{resume?.title}</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div style={{ border: "1px solid", padding: 8, flex: 1 }}>
          {resume && (
            <Editor
              resume={resume}
              onChange={setResume}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )}
        </div>
        <div style={{ border: "1px solid", padding: 8, flex: 1 }}>
          <Preview data={resume} />
        </div>
      </div>
    </>
  );
}
