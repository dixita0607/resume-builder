const getAll = async () => {
  return JSON.parse(localStorage.getItem("resumes")) || [];
};

const add = async (newResume) => {
  const existingResumes = await getAll();
  localStorage.setItem(
    "resumes",
    JSON.stringify([newResume, ...existingResumes])
  );
  localStorage.setItem(`resume_${newResume.id}`, JSON.stringify(newResume));
};

const getById = async (resumeId) => {
  return JSON.parse(localStorage.getItem(`resume_${resumeId}`));
};

const update = async (resumeId, data) => {
  localStorage.setItem(resumeId, JSON.stringify(data));
};

const remove = async (resumeId) => {
  localStorage.removeItem(`resume_${resumeId}`);
  const existingResumes = await getAll();
  localStorage.setItem(
    "resumes",
    JSON.stringify(existingResumes.filter((resume) => resume.id !== resumeId))
  );
};

export { getAll, getById, add, update, remove };
