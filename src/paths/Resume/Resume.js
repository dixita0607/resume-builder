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
    <main>
      <Header />
      <div className={styles["resume-container"]}>
        <div className={styles["editor-preview-container"]}>
          {resume && (
            <div className={styles["editor-container"]}>
              <Editor
                resume={resume}
                onChange={setResume}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            </div>
          )}
          {resume && (
            <div className={styles["preview-container"]}>
              <Preview data={resume} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
