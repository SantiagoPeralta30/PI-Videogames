import React from "react";
import mail from "../../src/images/mail.png";
import styles from "../styles/About.module.css";


const About = () =>{

    const copiarText = (text) => {
        navigator.clipboard.writeText(text);
        alert("Texto Copiado!");
    }

    return (
        <div className={styles.ContenedorPrincipal}>
            <div className={styles.header}>
                <h1>About the project</h1>
            </div>
            <div className={styles.bodyAndImgameContainer}>
                <div className={styles.body}>
                <h3>Project developed for my individual project at the bootcamp Soy Henry</h3>
                <h3>Technologies used for this project:</h3>
                <ul>
                    <li>Javascript</li>
                    <li>React js</li>
                    <li>Redux js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgresSQL</li>
                    <li>Sequelize</li>
                </ul>
                </div>
            </div>
            <div className={styles.header}>
                <h1>About Developer</h1>
            </div>
            <div className={styles.bodyAndImgameContainer}>
                <div className={styles.body}>
                <h3>Nombre: Santiago Peralta</h3>
                <h4>Fullstack Developer</h4>
                <p>
                    Looking to expand my knowledge on programming technologies further and further,
                    with the abilities to look for solutions to problems in the work enviroment and future teams,
                    waiting to develop all sorts of applications using different web technologies. 
                    With skills to create applications with Javascript, React, Redux, Node.js, Express,
                    PostgresSQL and Sequelize.
                </p>
                </div>
            </div>
            <div className={styles.header}>
                <h1>CONTACT</h1>
            </div>
            <div className={styles.contact}>
                <div>
                    <h3>peraltasantiago21@gmail.com</h3>
                    <img src={mail} onClick={() => copiarText("peraltasantiago21@gmail.com")} alt="" />
                </div>
                <div className={styles.socialNet}>
                    <a target="_blank" href="https://www.linkedin.com/in/santiago-peralta-1961b8258/">
                        <img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/images-linkedin-logo-png-14.png" alt="" />
                    </a>
                    <a target="_blank" href="https://github.com/SantiagoPeralta30">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default About;