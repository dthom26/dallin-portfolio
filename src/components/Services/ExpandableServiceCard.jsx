import React from "react";
import { Link } from "react-router-dom";
import styles from "./ExpandableServiceCard.module.css";
import { AccordionItem, AccordionHeader, AccordionPanel } from "./Accordion";
import projects from "../projectData";

function RelatedProjects({ slugs = [] }) {
  const items = slugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean);
  if (!items.length) return null;
  return (
    <div className={styles.related}>
      {items.map((p) => (
        <Link key={p.slug} to={`/project/${p.id}`} className="project-link">
          <div className={styles.thumbWrapper}>
            <img
              className={styles.projectThumb}
              src={p.image}
              alt={p.name}
              loading="lazy"
            />
            <div className={styles.thumbOverlay}>
              <span className={styles.thumbLabel}>{p.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function ExpandableServiceCard({ service, index = 0 }) {
  const value = service.slug;
  const badgeLabel = String(index + 1).padStart(2, "0");
  return (
    <AccordionItem value={value}>
      <div className={styles.card}>
        <AccordionHeader value={value}>
          <div className={styles.headerContent}>
            <span className={styles.badge}>{badgeLabel}</span>
            <div>
              <div className="service-title">{service.title}</div>
              <div className="service-short">{service.short}</div>
            </div>
          </div>
        </AccordionHeader>
        <AccordionPanel value={value}>
          <div className={styles.panel}>
            <ul className={styles.detailsList}>
              {service.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <RelatedProjects slugs={service.relatedProjects} />
          </div>
        </AccordionPanel>
      </div>
    </AccordionItem>
  );
}
