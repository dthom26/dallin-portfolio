import React from "react";
import styles from "./ServicesOverview.module.css";
import ServiceCard from "./ServiceCard.jsx";
import { Globe, ShoppingCart, Code2, FileText, Briefcase } from "lucide-react";
const data = [
    {
        id: 1,
        title: "Custom Website Development",
        description: "Professional websites with responsive design and SEO optimization built-in for all devices and search rankings.",
        icon: <Globe />,
    },
    {
        id: 2,
        title: "E-Commerce & Shopify",
        description: "Build and optimize online stores that convert.",
        icon: <ShoppingCart />,
    },
    {
        id: 3,
        title: "Full-Stack Development",
        description: "End-to-end applications covering frontend and backend.",
        icon: <Code2 />,
    },
    {
        id: 4,
        title: "Content Management Systems",
        description: "Take control with user-friendly CMS solutions.",
        icon: <FileText />,
    },
    {
        id: 5,
        title: "Custom Business Applications",
        description: "Tailored software for your unique challenges.",
        icon: <Briefcase />,
    },
];
const ServicesOverview = () => {
    return (
        <div id="services">
            <h2 className={styles.heading}>My Services</h2>
            <div className={styles.servicesGrid}>
                {data.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                ))}
            </div>
            <div className={styles.ctaContainer}>
                <a href="#contact" className={styles.ctaButton}>
                    Let's Work Together
                </a>
            </div>
        </div>
    );
};

export default ServicesOverview;