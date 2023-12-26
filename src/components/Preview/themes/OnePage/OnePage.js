import styles from "./OnePage.module.css";

const OnePage = ({ resume }) => {
  return (
    <div className={styles["one-page-container"]}>
      <div className={styles["resume"]}>
        <div className={styles.largeFont}>
          <span>{resume.basics.name},</span>
          <span>{resume.basics.label}</span>
        </div>
        <div className={styles.smallFont}>
          <div>
            <span>{resume.basics.email}</span>
            <span className={styles.divider}>|</span>
            <span>{resume.basics.phone}</span>
            <span className={styles.divider}>|</span>
            <span>
              <a href={resume.basics.url}>Website</a>
            </span>
          </div>
        </div>
        <div className={styles.sectionLine}></div>
        <div className={styles.sectionBlock}>
          <div className={styles.sectionName}>
            <span>SUMMARY</span>
          </div>
          <div className={styles.sectionContent}>
            <span>{resume.basics.summary}</span>
          </div>
        </div>
        <div className={styles.sectionLine}></div>
        <div className={styles.sectionBlock}>
          <div className={styles.sectionName}>
            <span>EXPERIENCE</span>
          </div>
          <div className={styles.sectionContent}>
            {resume.work.map((work, index) => (
              <div className={index.toString()}>
                <div>
                  <span className={styles.title}>
                    {work.position}, <a href={work.url}>{work.name}</a>
                  </span>
                  <span className={styles.date}>
                    {work.startDate} &mdash; {work.endDate || "Present"}
                  </span>
                  <div>{work.summary}</div>
                </div>
                <div className={styles.separator}></div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sectionLine}></div>
        <div className={styles.sectionBlock}>
          <div className={styles.sectionName}>
            <span>EDUCATION</span>
          </div>
          <div className={styles.sectionContent}>
            {resume.education.map((education, index) => (
              <div key={index.toString()}>
                <div>
                  <span className={styles.title}>
                    <a href={education.url}>{education.institution}</a>
                  </span>
                  <span className={styles.date}>
                    {education.startDate} &mdash; {education.endDate}
                  </span>
                  <div className="">
                    {education.studyType} - {education.area}
                  </div>
                </div>
                <div className={styles.separator}></div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sectionLine}></div>
        <div className={styles.sectionBlock}>
          <div className={styles.sectionName}>
            <span>SKILLS</span>
          </div>
          <div className={styles.sectionContent}>
            {resume.skills.map((skill, index) => (
              <div key={index.toString()}>
                <div className={styles.skillBlock}>
                  <span className={styles.title}>
                    {skill.name} {skill.level && `(${skill.level})`}:{" "}
                  </span>
                  {skill.keywords.map((keyword, index) => (
                    <span key={index.toString()}>{keyword},</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sectionLine}></div>
      </div>
    </div>
  );
};

export default OnePage;
