import React from "react";
import { Star, Quote } from "lucide-react";
import styles from "../Reviews.module.css";

// ============================================================================
// 🎓 TEACHING MOMENT: Composition Pattern
// ============================================================================
// These components are SIMPLE and FOCUSED. Each does ONE thing well.
// They can be used together or separately - that's the power of composition!

// Main card container
export function ReviewCard({ children, className = "" }) {
  return <div className={`${styles.reviewCard} ${className}`}>{children}</div>;
}

// Header section with name and role
export function ReviewHeader({ name, role, company }) {
  return (
    <div className={styles.reviewHeader}>
      <h3 className={styles.reviewerName}>{name}</h3>
      <span className={styles.reviewerSeparator}>•</span>
      <p className={styles.reviewerRole}>
        {role}
        {company && ` at ${company}`}
      </p>
    </div>
  );
}

// Star rating display
export function ReviewRating({ rating, maxRating = 5 }) {
  return (
    <div className={styles.rating}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          size={20}
          className={index < rating ? styles.starFilled : styles.starEmpty}
          fill={index < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

// Review text content
export function ReviewContent({ text }) {
  return (
    <div className={styles.reviewContent}>
      <Quote className={styles.quoteIcon} size={32} />
      <p className={styles.reviewText}>{text}</p>
    </div>
  );
}

// Footer with project and date
export function ReviewFooter({ project, date }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className={styles.reviewFooter}>
      {project && <span className={styles.projectTag}>Project: {project}</span>}
      {/* <span className={styles.reviewDate}>{formattedDate}</span> */}
    </div>
  );
}

// ============================================================================
// 🎓 BONUS: A pre-composed "default" card
// ============================================================================
// Sometimes you want convenience! This uses all the pieces above.
// Users can use this OR compose their own custom version!

export function DefaultReviewCard({ review }) {
  return (
    <ReviewCard>
      <ReviewHeader
        name={review.name}
        role={review.role}
        company={review.company}
      />
      {/* <ReviewRating rating={review.rating} /> */}
      <ReviewContent text={review.text} />
      <ReviewFooter project={review.project} date={review.date} />
    </ReviewCard>
  );
}
