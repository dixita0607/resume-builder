import uuid4 from "uuid4";
import defaultResume from "../../utils/resume-schema.json";
import dixitasDefaultResume from "../../utils/dixitas-resume.json";

const add = async (meta) => {
  const existingResumes = await getAll();
  localStorage.setItem("resumes", JSON.stringify([meta, ...existingResumes]));
  localStorage.setItem(
    `resume.${meta.id}`,
    JSON.stringify(
      Object.assign(
        {
          ...defaultResume,
          meta: {
            ...defaultResume.meta,
            ...meta,
          },
        },
        Object.create(null),
      ),
    ),
  );
};

const getAll = async () => {
  const resumes = JSON.parse(localStorage.getItem("resumes"));
  if (!resumes) {
    let resume = {
      ...dixitasDefaultResume,
      meta: {
        ...dixitasDefaultResume.meta,
        id: uuid4(),
        title: "Dixita (Demo)",
      },
    };
    localStorage.setItem(
      "resumes",
      JSON.stringify([{ id: resume.meta.id, title: resume.meta.title }]),
    );
    localStorage.setItem(`resume.${resume.meta.id}`, JSON.stringify(resume));
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
    JSON.stringify(existingResumes.filter((resume) => resume.id !== resumeId)),
  );
};

export { getAll, getById, add, update, remove };
