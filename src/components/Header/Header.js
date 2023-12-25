import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <NavLink to="/">
      <h1 className={styles.title}>Resume Builder</h1>
    </NavLink>
  );
}
