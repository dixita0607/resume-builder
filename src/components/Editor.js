import React, { useRef } from "react";
import Input from "./form/Input";
import TextArea from "./form/TextArea";
import { setIn } from "../utils/objArr";

export default function Editor({ resume, onChange, onSave, onCancel }) {
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
        e.target.value.split(",").map((v) => v.trim())
      )
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
      })
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
      })
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
      })
    );
  };

  const handleRemoveSkills = (index) => () =>
    onChange(setIn(resume, ["skills", index]));

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <button>Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <fieldset>
        <legend>Basics</legend>
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
        <TextArea
          label="Summary"
          name="basics.summary"
          cols="80"
          rows="4"
          value={resume.basics.summary}
          onChange={handleChange(["basics", "summary"])}
        />
      </fieldset>
      <fieldset>
        <legend>Work</legend>
        {resume.work.map((work, index) => (
          <div key={index.toString()}>
            <button type="button" onClick={handleRemoveWork(index)}>
              Remove
            </button>
            <Input
              label="Name"
              type="text"
              name={`work.${index}.companyName`}
              value={work.name}
              onChange={handleChange(["work", index, "name"])}
            />
            <Input
              label="Position"
              type="text"
              name={`work.${index}.position`}
              value={work.position}
              onChange={handleChange(["work", index, "position"])}
            />
            <Input
              label="URL"
              type="url"
              name={`work.${index}.url`}
              value={work.url}
              onChange={handleChange(["work", index, "url"])}
            />
            <Input
              label="Date"
              type="text"
              placeholder="YYYY-MM-DD"
              name={`work.${index}.startDate`}
              value={work.startDate}
              onChange={handleChange(["work", index, "startDate"])}
            />
            <Input
              label="Date"
              type="text"
              placeholder="YYYY-MM-DD"
              name={`work.${index}.endDate`}
              value={work.endDate}
              onChange={handleChange(["work", index, "endDate"])}
            />
            <TextArea
              label="Summary"
              name={`work.${index}.summary`}
              cols="80"
              rows="4"
              value={work.summary}
              onChange={handleChange(["work", index, "summary"])}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddWork}>
          Add
        </button>
      </fieldset>
      <fieldset>
        <legend>Education</legend>
        {resume.education.map((education, index) => (
          <div key={index.toString}>
            <button type="button" onClick={handleRemoveEducation(index)}>
              Remove
            </button>
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
              label="Date"
              type="text"
              placeholder="YYYY-MM-DD"
              name={`education.${index}.startDate`}
              value={education.startDate}
              onChange={handleChange(["education", index, "startDate"])}
            />
            <Input
              label="Date"
              type="text"
              placeholder="YYYY-MM-DD"
              name={`education.${index}.endDate`}
              value={education.endDate}
              onChange={handleChange(["education", index, "endDate"])}
            />
            <Input
              label="Score"
              type="text"
              name={`education.${index}.score`}
              value={education.score}
              onChange={handleChange(["education", index, "score"])}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddEducation}>
          Add
        </button>
      </fieldset>
      <fieldset>
        <legend>Skills</legend>
        {resume.skills.map((skill, index) => (
          <div key={index.toString()}>
            <button type="button" onClick={handleRemoveSkills(index)}>
              Remove
            </button>
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
            <Input
              label="Keywords"
              type="text"
              placeholder="Comma separated values"
              name={`skills.${index}.keywords`}
              value={skill.keywords.join(", ")}
              onChange={handleKeywordsChange(index)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddSkills}>
          Add
        </button>
      </fieldset>
    </form>
  );
}
