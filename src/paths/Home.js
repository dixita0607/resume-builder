import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useRef } from "react";
import { useResumes } from "../hooks/resumes";

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
      <form onSubmit={handleAddResume} ref={formRef}>
        <input type="text" name="title" required />
        <button>Add</button>
      </form>
      {resumes.length > 0 ? (
        <ul>
          {resumes.map((resume) => (
            <li key={resume.id}>
              <Link to={`/${resume.id}`}>{resume.title}</Link>
              <button
                type="button"
                onClick={() => handleRemoveResume(resume.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <span>No resume available. Please add one to proceed.</span>
      )}
    </>
  );
}

export default Home;
