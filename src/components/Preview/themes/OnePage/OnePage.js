import styles from "./OnePage.module.css";

const OnePage = ({ resume }) => {
  return (
    <section className={styles["one-page-container"]} aria-label="Resume">
      <div className={styles["resume"]} aria-label="Card">
        <header aria-label="Header">
          <h1>
            <span aria-label="Name">{resume.basics.name}</span>
            <span aria-hidden>{resume.basics.label ? ", " : null}</span>
            <span aria-label="Label">{resume.basics.label}</span>
          </h1>
          <div aria-label="Sub heading">
            <span aria-label="Email">{resume.basics.email}</span>
            <span className={styles.divider} aria-hidden>
              |
            </span>
            <span aria-label="Phone">{resume.basics.phone}</span>
            <span className={styles.divider} aria-hidden>
              |
            </span>
            <a href={resume.basics.url} aria-label="Url">
              {resume.basics.url}
            </a>
          </div>
        </header>
        <div className={styles.sectionLine} />
        <section className={styles.sectionBlock} aria-label="Summary Section">
          <span className={styles.sectionName} aria-hidden>
            SUMMARY
          </span>
          <p className={styles.sectionContent} aria-label="Summary">
            {resume.basics.summary}
          </p>
        </section>
        <div className={styles.sectionLine} />
        <section
          className={styles.sectionBlock}
          aria-label="Experience Section"
        >
          <span className={styles.sectionName} aria-hidden>
            EXPERIENCE
          </span>
          <ol className={styles.sectionContent} aria-label="Experience list">
            {resume.work.map((work, index) => (
              <li key={index.toString()} aria-label="Experience">
                <span className={styles.title} aria-label="Position">
                  {work.position}
                  {work.name ? ", " : null}
                  <a href={work.url}>{work.name}</a>
                </span>
                <span className={styles.date} aria-label="Duration">
                  {work.startDate} &mdash; {work.endDate || "Present"}
                </span>
                <p aria-label="Summary">{work.summary}</p>
                {index !== resume.work.length - 1 && (
                  <div className={styles.separator} />
                )}
              </li>
            ))}
          </ol>
        </section>
        <div className={styles.sectionLine} />
        <section className={styles.sectionBlock} aria-label="Education Section">
          <span className={styles.sectionName} aria-hidden>
            EDUCATION
          </span>
          <ol className={styles.sectionContent} aria-label="Education List">
            {resume.education.map((education, index) => (
              <li key={index.toString()} aria-label="Education">
                <span className={styles.title} aria-label="Institution">
                  <a href={education.url}>{education.institution}</a>
                </span>
                <span className={styles.date} aria-label="Duration">
                  {education.startDate} &mdash; {education.endDate}
                </span>
                <div aria-label="Degree">
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
        <section className={styles.sectionBlock} aria-label="Skills Section">
          <span className={styles.sectionName} aria-hidden>
            SKILLS
          </span>
          <ul className={styles.sectionContent} aria-label="Skill List">
            {resume.skills.map((skill, index) => (
              <li
                key={index.toString()}
                className={styles.skillBlock}
                aria-label="Skill"
              >
                <span className={styles.title} aria-label="Title">
                  {skill.name} {skill.level && `(${skill.level})`}:{" "}
                </span>
                <span aria-label="Keywords">{skill.keywords.join(", ")}</span>
              </li>
            ))}
          </ul>
        </section>
        <div className={styles.sectionLine} />
      </div>
    </section>
  );
};

export default OnePage;
