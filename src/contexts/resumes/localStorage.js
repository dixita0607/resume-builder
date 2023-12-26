import uuid4 from "uuid4";
import defaultResume from "../../utils/resume-schema.json";
import dixitasDefaultResume from "../../utils/dixitas-resume.json";

const add = async (newResume) => {
  const existingResumes = await getAll();
  localStorage.setItem(
    "resumes",
    JSON.stringify([newResume, ...existingResumes])
  );
  localStorage.setItem(
    `resume.${newResume.id}`,
    JSON.stringify(
      Object.assign(
        {
          ...defaultResume,
          ...newResume,
        },
        Object.create(null)
      )
    )
  );
};

const getAll = async () => {
  const resumes = JSON.parse(localStorage.getItem("resumes"));
  if (!resumes) {
    localStorage.setItem("resumes", JSON.stringify([]));
    await add({
      ...dixitasDefaultResume,
      id: uuid4(),
      title: "Dixita (Demo)",
    });
    return JSON.parse(localStorage.getItem("resumes"));
  }
  return resumes;
};

const getById = async (resumeId) => {
  return JSON.parse(localStorage.getItem(`resume.${resumeId}`));
};

const update = async (resumeId, data) => {
  localStorage.setItem(`resume.${resumeId}`, JSON.stringify(data));
};

const remove = async (resumeId) => {
  localStorage.removeItem(`resume.${resumeId}`);
  const existingResumes = await getAll();
  localStorage.setItem(
    "resumes",
    JSON.stringify(existingResumes.filter((resume) => resume.id !== resumeId))
  );
};

export { getAll, getById, add, update, remove };
