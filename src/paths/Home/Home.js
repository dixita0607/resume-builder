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
      <section className={styles.homeContainer} aria-label="Interface">
        <div className={styles.homeContainerCard} aria-label="Card">
          <form
            onSubmit={handleAddResume}
            ref={formRef}
            className={styles.resumeForm}
            aria-label="Add Resume"
          >
            <input
              className={styles.input}
              type="text"
              name="title"
              placeholder="Enter title for your resume"
              required
            />
            <button>Add</button>
          </form>
          {resumes.length > 0 ? (
            <ul className={styles.resumeList} aria-label="Resumes">
              {resumes.map((resume) => (
                <li className={styles.listItem} key={resume.id}>
                  <span className={styles.listTitle} aria-label={resume.title}>
                    {resume.title}
                  </span>
                  <span aria-label="Actions">
                    <Link to={`/${resume.id}`}>
                      <button
                        className={`link ${styles.listButton}`}
                        type="button"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      className={`link danger ${styles.listButton}`}
                      onClick={() => handleRemoveResume(resume.id)}
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.emptyPlaceholder}>
              No resume available. Please add one to proceed.
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
