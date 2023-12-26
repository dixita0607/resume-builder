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
    <>
      <Header />
      <section className={styles["home-container"]} aria-label="Interface">
        <div className={styles["home-container-card"]} aria-label="Card">
          <form
            onSubmit={handleAddResume}
            ref={formRef}
            className={styles["resume-form"]}
            aria-label="Add Resume"
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
            <ul className={styles["resume-list"]} aria-label="Resumes">
              {resumes.map((resume) => (
                <li className={styles["list-item"]} key={resume.id}>
                  <span
                    className={styles["list-title"]}
                    aria-label={resume.title}
                  >
                    {resume.title}
                  </span>
                  <span aria-label="Actions">
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
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles["empty-placeholder"]}>
              No resume available. Please add one to proceed.
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
