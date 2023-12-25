import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <NavLink to="/">
      <h1>Resume Builder</h1>
    </NavLink>
  );
}
