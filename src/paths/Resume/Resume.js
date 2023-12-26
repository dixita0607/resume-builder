import React from "react";
import Editor from "../../components/Editor/Editor";
import Preview from "../../components/Preview/Preview";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useResume } from "../../hooks/resumes";
import styles from "./Resume.module.css";

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
      <section className={styles["resume-container"]} aria-label="Interface">
        <div className={styles["editor-preview-container"]}>
          {resume && (
            <section className={styles["editor-container"]} aria-label="Editor">
              <Editor
                resume={resume}
                onChange={setResume}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            </section>
          )}
          {resume && (
            <section
              className={styles["preview-container"]}
              aria-label="Preview"
            >
              <Preview data={resume} />
            </section>
          )}
        </div>
      </section>
    </>
  );
}
