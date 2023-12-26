import React, { useRef } from "react";
import Input from "../form/Input/Input";
import TextArea from "../form/TextArea/TextArea";
import { setIn } from "../../utils/objArr";
import styles from "./Editor.module.css";

export default function Editor({
  resume,
  onChange,
  onSave,
  onCancel,
  autoSave,
  onAutoSaveChange,
}) {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave();
  };

  const handleChange = (fields) => (e) =>
    onChange(setIn(resume, fields, e.target.value));

  const handleKeywordsChange = (index) => (e) =>
    onChange(
      setIn(
        resume,
        ["skills", index, "keywords"],
        e.target.value.split(",").map((v) => v.trim()),
      ),
    );

  const handleAddWork = () =>
    onChange(
      setIn(resume, ["work", resume.work.length], {
        name: "",
        position: "",
        url: "",
        startDate: "",
        endDate: "",
        summary: "",
      }),
    );

  const handleRemoveWork = (index) => () => {
    onChange(setIn(resume, ["work", index]));
  };

  const handleAddEducation = () => {
    onChange(
      setIn(resume, ["education", resume.education.length], {
        institution: "",
        url: "",
        area: "",
        studyType: "",
        startDate: "",
        endDate: "",
        score: "",
      }),
    );
  };

  const handleRemoveEducation = (index) => () =>
    onChange(setIn(resume, ["education", index]));

  const handleAddSkills = () => {
    onChange(
      setIn(resume, ["skills", resume.skills.length], {
        name: "",
        level: "",
        keywords: [],
      }),
    );
  };

  const handleRemoveSkills = (index) => () =>
    onChange(setIn(resume, ["skills", index]));

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={styles.editorForm}
      aria-label="Resume Form"
    >
      <div className={styles.toolbar}>
        <h2 className={styles.title}>{resume?.title}</h2>
        <div aria-label="Actions" className={styles.actions}>
          <div className={styles.autosave}>
            <input
              type="checkbox"
              name="autosave"
              checked={autoSave}
              onChange={(e) => onAutoSaveChange(e.target.checked)}
            />
            <label htmlFor="autosave">Auto save</label>
          </div>
          {" | "}
          <button className="link" disabled={!!autoSave}>
            Save
          </button>
          {" | "}
          <button type="button" className="link danger" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
      <div className={styles.formSection} aria-hidden>
        <div className={styles.formSectionTitle}>Personal Information</div>
        <div className="row" aria-hidden>
          <Input
            label="Name"
            type="text"
            name="basics.name"
            value={resume.basics.name}
            onChange={handleChange(["basics", "name"])}
          />
          <Input
            label="Label"
            type="text"
            name="basics.label"
            value={resume.basics.label}
            onChange={handleChange(["basics", "label"])}
          />
          <Input
            label="Email"
            type="email"
            name="basics.email"
            value={resume.basics.email}
            onChange={handleChange(["basics", "email"])}
          />
          <Input
            label="Phone"
            type="tel"
            name="basics.phone"
            value={resume.basics.phone}
            onChange={handleChange(["basics", "phone"])}
          />
          <Input
            label="URL"
            type="url"
            name="basics.url"
            value={resume.basics.url}
            onChange={handleChange(["basics", "url"])}
          />
        </div>
        <div className="row">
          <TextArea
            label="Summary"
            name="basics.summary"
            rows="4"
            value={resume.basics.summary}
            onChange={handleChange(["basics", "summary"])}
          />
        </div>
      </div>
      <div className={styles.formSection} aria-hidden>
        <div className={styles.formSectionTitle}>Experience</div>
        {resume.work.map((work, index) => (
          <div key={index.toString()} className={styles.sectionCard}>
            <button
              type="button"
              className={`link danger ${styles.deleteButton}`}
              onClick={handleRemoveWork(index)}
            >
              Remove
            </button>
            <div className="row">
              <Input
                label="Name"
                type="text"
                name={`work.${index}.companyName`}
                value={work.name}
                onChange={handleChange(["work", index, "name"])}
              />
              <Input
                label="URL"
                type="url"
                name={`work.${index}.url`}
                value={work.url}
                onChange={handleChange(["work", index, "url"])}
              />
              <Input
                label="Position"
                type="text"
                name={`work.${index}.position`}
                value={work.position}
                onChange={handleChange(["work", index, "position"])}
              />
            </div>
            <div className="row">
              <Input
                label="Start Date"
                type="text"
                placeholder="YYYY-MM"
                name={`work.${index}.startDate`}
                value={work.startDate}
                onChange={handleChange(["work", index, "startDate"])}
              />
              <Input
                label="End Date"
                type="text"
                placeholder="YYYY-MM"
                name={`work.${index}.endDate`}
                value={work.endDate}
                onChange={handleChange(["work", index, "endDate"])}
              />
            </div>
            <div className="row">
              <TextArea
                label="Summary"
                name={`work.${index}.summary`}
                rows="4"
                value={work.summary}
                onChange={handleChange(["work", index, "summary"])}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className={styles.addButton}
          onClick={handleAddWork}
        >
          Add Experience
        </button>
      </div>
      <div className={styles.formSection} aria-hidden>
        <div className={styles.formSectionTitle}>Education</div>
        {resume.education.map((education, index) => (
          <div key={index.toString} className={styles.sectionCard}>
            <button
              type="button"
              className={`link danger ${styles.deleteButton}`}
              onClick={handleRemoveEducation(index)}
            >
              Remove
            </button>
            <div className="row">
              <Input
                label="Institution"
                type="text"
                name={`education.${index}.institution`}
                value={education.institution}
                onChange={handleChange(["education", index, "institution"])}
              />
              <Input
                label="URL"
                type="url"
                name={`education.${index}.url`}
                value={education.url}
                onChange={handleChange(["education", index, "url"])}
              />
              <Input
                label="Area"
                type="text"
                name={`education.${index}.area`}
                value={education.area}
                onChange={handleChange(["education", index, "area"])}
              />
              <Input
                label="Type"
                type="text"
                name={`education.${index}.studyType`}
                value={education.studyType}
                onChange={handleChange(["education", index, "studyType"])}
              />
              <Input
                label="Score"
                type="text"
                name={`education.${index}.score`}
                value={education.score}
                onChange={handleChange(["education", index, "score"])}
              />
            </div>
            <div className="row">
              <Input
                label="Start Date"
                type="text"
                placeholder="YYYY-MM"
                name={`education.${index}.startDate`}
                value={education.startDate}
                onChange={handleChange(["education", index, "startDate"])}
              />
              <Input
                label="End Date"
                type="text"
                placeholder="YYYY-MM"
                name={`education.${index}.endDate`}
                value={education.endDate}
                onChange={handleChange(["education", index, "endDate"])}
              />
            </div>
          </div>
        ))}
        <button
          className={styles.addButton}
          type="button"
          onClick={handleAddEducation}
        >
          Add Education
        </button>
      </div>
      <div className={styles.formSection} aria-hidden>
        <div className={styles.formSectionTitle}>Skills</div>
        {resume.skills.map((skill, index) => (
          <div key={index.toString()} className={styles.sectionCard}>
            <button
              type="button"
              className={`link danger ${styles.deleteButton}`}
              onClick={handleRemoveSkills(index)}
            >
              Remove
            </button>
            <div className="row">
              <Input
                label="Name"
                type="text"
                name={`skills.${index}.name`}
                value={skill.name}
                onChange={handleChange(["skills", index, "name"])}
              />
              <Input
                label="Level"
                type="text"
                name={`skills.${index}.level`}
                value={skill.level}
                onChange={handleChange(["skills", index, "level"])}
              />
            </div>
            <div className="row">
              <Input
                label="Keywords"
                type="text"
                placeholder="Comma separated values"
                name={`skills.${index}.keywords`}
                value={skill.keywords.join(", ")}
                onChange={handleKeywordsChange(index)}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSkills}
          className={styles.addButton}
        >
          Add Skill
        </button>
      </div>
    </form>
  );
}
