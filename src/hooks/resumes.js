import { useContext, useEffect, useState } from "react";
import ResumesContext from "../contexts/resumes";
import uuid4 from "uuid4";

export const useResumes = () => {
  const [resumes, setResumes] = useState([]);
  const { getAll, add, remove } = useContext(ResumesContext);

  useEffect(() => {
    const fetchResumes = async () => {
      const data = await getAll();
      setResumes(data);
    };
    fetchResumes();
  }, [getAll]);

  return {
    resumes,
    add: async (title) => {
      const resume = { id: uuid4(), title };
      setResumes([resume, ...resumes]);
      await add(resume);
    },
    remove: async (id) => {
      setResumes(resumes.filter((resume) => resume.id !== id));
      await remove(id);
    },
  };
};

export const useResume = (id) => {
  const [resume, setResume] = useState(null);
  const [autoSave, setAutoSave] = useState(false);

  const { getById, update } = useContext(ResumesContext);

  useEffect(() => {
    const fetchResume = async () => {
      const data = await getById(id);
      setResume(data);
    };
    fetchResume();
  }, [getById, id]);

  useEffect(() => {
    if (autoSave) {
      update(resume.meta.id, resume).catch((err) => console.error(err));
    }
  }, [autoSave, resume, update]);

  return {
    resume,
    autoSave,
    setAutoSave,
    setResume,
    save: async () => {
      await update(resume.meta.id, resume);
    },
  };
};
