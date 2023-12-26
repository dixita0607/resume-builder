import styles from "./OnePage.module.css";

const OnePage = ({ resume }) => {
  return (
    <div className={styles["one-page-container"]}>
      <div className={styles["resume"]}>
        <header>
          <h1>
            {resume.basics.name}
            {resume.basics.label ? ", " : null}
            {resume.basics.label}
          </h1>
          <div>
            <span>{resume.basics.email}</span>
            <span className={styles.divider}>|</span>
            <span>{resume.basics.phone}</span>
            <span className={styles.divider}>|</span>
            <span>
              <a href={resume.basics.url}>Website</a>
            </span>
          </div>
        </header>
        <div className={styles.sectionLine} />
        <section className={styles.sectionBlock}>
          <span className={styles.sectionName}>SUMMARY</span>
          <p className={styles.sectionContent}>{resume.basics.summary}</p>
        </section>
        <div className={styles.sectionLine} />
        <section className={styles.sectionBlock}>
          <span className={styles.sectionName}>EXPERIENCE</span>
          <ol className={styles.sectionContent}>
            {resume.work.map((work, index) => (
              <li key={index.toString()}>
                <span className={styles.title}>
                  {work.position}
                  {work.name ? ", " : null}
                  <a href={work.url}>{work.name}</a>
                </span>
                <span className={styles.date}>
                  {work.startDate} &mdash; {work.endDate || "Present"}
                </span>
                <p>{work.summary}</p>
                {index !== resume.work.length - 1 && (
                  <div className={styles.separator} />
                )}
              </li>
            ))}
          </ol>
        </section>
        <div className={styles.sectionLine} />
        <section className={styles.sectionBlock}>
          <span className={styles.sectionName}>EDUCATION</span>
          <ol className={styles.sectionContent}>
            {resume.education.map((education, index) => (
              <li key={index.toString()}>
                <span className={styles.title}>
                  <a href={education.url}>{education.institution}</a>
                </span>
                <span className={styles.date}>
                  {education.startDate} &mdash; {education.endDate}
                </span>
                <div className="">
                  {education.studyType} - {education.area}
                </div>
                {index !== resume.education.length - 1 && (
                  <div className={styles.separator} />
                )}
              </li>
            ))}
          </ol>
        </section>
        <div className={styles.sectionLine} />
        <section className={styles.sectionBlock}>
          <span className={styles.sectionName}>SKILLS</span>
          <ul className={styles.sectionContent}>
            {resume.skills.map((skill, index) => (
              <li key={index.toString()} className={styles.skillBlock}>
                <span className={styles.title}>
                  {skill.name} {skill.level && `(${skill.level})`}:{" "}
                </span>
                {skill.keywords.join(", ")}
              </li>
            ))}
          </ul>
        </section>
        <div className={styles.sectionLine} />
      </div>
    </div>
  );
};

export default OnePage;
