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
  const { resume, setResume, save, autoSave, setAutoSave } = useResume(id);

  const handleSave = () => {
    save();
    navigate(-1);
  };

  const handleCancel = () => navigate(-1);

  return (
    <>
      <Header />
      <section className={styles.container} aria-label="Interface">
        <div className={styles.editorPreviewContainer}>
          {resume && (
            <section className={styles.editorContainer} aria-label="Editor">
              <Editor
                resume={resume}
                onChange={setResume}
                onSave={handleSave}
                onCancel={handleCancel}
                autoSave={autoSave}
                onAutoSaveChange={setAutoSave}
              />
            </section>
          )}
          {resume && (
            <section className={styles.previewContainer} aria-label="Preview">
              <Preview data={resume} />
            </section>
          )}
        </div>
      </section>
    </>
  );
}
