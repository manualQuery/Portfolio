// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignInAlt, faAd } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
  <nav style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
    <Link href="/" aria-label="Go to home page">
      <button className="nav-button">
        <FontAwesomeIcon icon={faHome} /> Home
      </button>
    </Link>
    <Link href="/login" aria-label="Login or Logout">
      <button className="nav-button">
        <FontAwesomeIcon icon={faSignInAlt} /> Login/Logout
      </button>
    </Link>
    <Link href="/advert" aria-label="View advertisements">
      <button className="nav-button">
        <FontAwesomeIcon icon={faAd} /> Advert
      </button>
    </Link>
  </nav>
);

export default Navbar;
