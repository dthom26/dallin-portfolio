import React from "react";
import styles from "./ServicesCard.module.css";
const ServiceCard = ({ title, description, icon }) => {
    return (
        <article className={styles.serviceCard}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </article>
    );
};

export default ServiceCard;