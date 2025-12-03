import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles["navbar"]}>
            <ul className={styles["navbar-links"]}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#diet-form">Diet</a></li>
                <li><a href="#exercise-form">Exercise Form</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;