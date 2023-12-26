import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import { useResumes } from "../../hooks/resumes";

function Home() {
  const { resumes, add, remove } = useResumes();

  const formRef = useRef(null);

  const handleAddResume = async (e) => {
    e.preventDefault();
    await add(e.target.title.value);
    formRef.current.reset();
  };

  const handleRemoveResume = async (resumeId) => {
    await remove(resumeId);
  };

  return (
    <main>
      <Header />
      <div className={styles["home-container"]}>
        <div className={styles["home-container-card"]}>
          <form
            onSubmit={handleAddResume}
            ref={formRef}
            className={styles["resume-form"]}
          >
            <input
              type="text"
              name="title"
              placeholder="Enter title for your resume"
              required
            />
            <button>Add</button>
          </form>
          {resumes.length > 0 ? (
            <ul className={styles["resume-list"]}>
              {resumes.map((resume) => (
                <li className={styles["list-item"]} key={resume.id}>
                  <div className={styles["list-title"]}>{resume.title}</div>
                  <div>
                    <Link to={`/${resume.id}`}>
                      <button
                        className={`link ${styles["list-button"]}`}
                        type="button"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      className={`link danger ${styles["list-button"]}`}
                      onClick={() => handleRemoveResume(resume.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles["empty-placeholder"]}>
              No resume available. Please add one to proceed.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
