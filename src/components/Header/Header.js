import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <NavLink to="/" aria-label="Home" className={styles.header}>
      <h1 className={styles.title}>Resume Builder</h1>
    </NavLink>
  );
}
