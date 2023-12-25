import defaultResume from "../../utils/resume-schema.json";

const getAll = async () => {
  return JSON.parse(localStorage.getItem("resumes")) || [];
};

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
          ...newResume,
          ...defaultResume,
        },
        Object.create(null)
      )
    )
  );
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
