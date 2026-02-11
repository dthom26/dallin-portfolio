import React from "react";
import ReviewCarousel from "./components/ReviewCarousel";
import { DefaultReviewCard } from "./components/ReviewCard";
import reviewsData from "./reviewsData";
import styles from "./Reviews.module.css";

// ============================================================================
// 🎓 TEACHING MOMENT: See the Compound Component Pattern in Action!
// ============================================================================
// Look how READABLE and FLEXIBLE this is!
// We can rearrange these components however we want.
// We can add/remove pieces easily.
// The parent (ReviewCarousel) handles ALL the complex logic!

export default function Reviews() {
  return (
    <section className={styles.reviewsSection} id="reviews">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Clients Say</h2>

        {/* 🎓 THIS IS THE COMPOUND COMPONENT PATTERN! */}
        <ReviewCarousel autoPlay={true} autoPlayInterval={5000}>
          {/* Container holds all the cards in 3D space */}
          <ReviewCarousel.Container>
            {reviewsData.map((review, index) => (
              // Each card is positioned in the carousel
              <ReviewCarousel.Card
                key={review.id}
                review={review}
                index={index}
              >
                {/* We can pass a render function to customize each card */}
                {(reviewData) => <DefaultReviewCard review={reviewData} />}
              </ReviewCarousel.Card>
            ))}
          </ReviewCarousel.Container>

          {/* Navigation arrows - desktop only */}
          <ReviewCarousel.Controls />

          {/* Mobile Navigation - shown only on mobile */}
          <ReviewCarousel.MobileControls />

          {/* Dot indicators */}
          <ReviewCarousel.Indicators />
        </ReviewCarousel>

        {/* Optional: CTA or additional content */}
        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>Want to work together?</p>
          <a href="#contact" className={styles.ctaButton}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 🎓 KEY LESSONS:
// ============================================================================
// 1. Separation of Concerns:
//    - ReviewCarousel = Logic & State
//    - ReviewCard = Presentation
//    - Reviews = Composition & Layout
//
// 2. Flexibility:
//    - Want to change order? Just rearrange JSX!
//    - Want custom card? Pass different children!
//    - Want to remove indicators? Delete that line!
//
// 3. Reusability:
//    - ReviewCarousel can display ANYTHING (testimonials, products, images)
//    - ReviewCard components can be used outside carousel
//    - Each piece is independently testable
//
// 4. Maintainability:
//    - Clear hierarchy and relationships
//    - Easy to find and fix bugs
//    - New developers understand structure immediately
// ============================================================================
