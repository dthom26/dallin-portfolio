// ============================================================================
// 🎯 QUICK REFERENCE: How to Use the Reviews Compound Component
// ============================================================================

import ReviewCarousel from "./components/ReviewCarousel";
import { 
  DefaultReviewCard, 
  ReviewCard,
  ReviewHeader,
  ReviewRating,
  ReviewContent,
  ReviewFooter 
} from "./components/ReviewCard";
import reviewsData from "./reviewsData";

// ============================================================================
// OPTION 1: Using the Default Pre-Composed Card (Easiest)
// ============================================================================

export function ReviewsBasic() {
  return (
    <ReviewCarousel autoPlay={true} autoPlayInterval={5000}>
      <ReviewCarousel.Container>
        {reviewsData.map((review, index) => (
          <ReviewCarousel.Card key={review.id} review={review} index={index}>
            {(reviewData) => <DefaultReviewCard review={reviewData} />}
          </ReviewCarousel.Card>
        ))}
      </ReviewCarousel.Container>
      <ReviewCarousel.Controls />
      <ReviewCarousel.Indicators />
    </ReviewCarousel>
  );
}

// ============================================================================
// OPTION 2: Custom Card Composition (More Control)
// ============================================================================

export function ReviewsCustom() {
  return (
    <ReviewCarousel autoPlay={false}>
      <ReviewCarousel.Container>
        {reviewsData.map((review, index) => (
          <ReviewCarousel.Card key={review.id} review={review} index={index}>
            {(reviewData) => (
              <ReviewCard>
                {/* Arrange pieces however you want! */}
                <ReviewRating rating={reviewData.rating} />
                <ReviewContent text={reviewData.text} />
                <ReviewHeader 
                  name={reviewData.name}
                  role={reviewData.role}
                  company={reviewData.company}
                  avatar={reviewData.avatar}
                />
                {/* Notice: we put Header at the bottom! */}
              </ReviewCard>
            )}
          </ReviewCarousel.Card>
        ))}
      </ReviewCarousel.Container>
      <ReviewCarousel.Indicators />
      {/* Notice: no Controls! */}
    </ReviewCarousel>
  );
}

// ============================================================================
// OPTION 3: Completely Custom Card (Total Freedom)
// ============================================================================

export function ReviewsFullyCustom() {
  return (
    <ReviewCarousel>
      <ReviewCarousel.Container>
        {reviewsData.map((review, index) => (
          <ReviewCarousel.Card key={review.id} review={review} index={index}>
            {(reviewData) => (
              <div style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '20px'
              }}>
                <h3>{reviewData.name}</h3>
                <p>"{reviewData.text}"</p>
                <span>⭐ {reviewData.rating}/5</span>
              </div>
            )}
          </ReviewCarousel.Card>
        ))}
      </ReviewCarousel.Container>
      <ReviewCarousel.Controls />
    </ReviewCarousel>
  );
}

// ============================================================================
// OPTION 4: Minimal (Just the Essentials)
// ============================================================================

export function ReviewsMinimal() {
  return (
    <ReviewCarousel>
      <ReviewCarousel.Container>
        {reviewsData.map((review, index) => (
          <ReviewCarousel.Card key={review.id} review={review} index={index}>
            {(r) => (
              <div>
                <h3>{r.name}</h3>
                <p>{r.text}</p>
              </div>
            )}
          </ReviewCarousel.Card>
        ))}
      </ReviewCarousel.Container>
    </ReviewCarousel>
  );
}

// ============================================================================
// PROPS REFERENCE
// ============================================================================

/*

ReviewCarousel Props:
---------------------
- autoPlay: boolean (default: true) - Auto-advance slides
- autoPlayInterval: number (default: 5000) - Milliseconds between slides
- children: ReactNode - Compound component children

ReviewCarousel.Card Props:
--------------------------
- key: string/number (required) - Unique identifier
- review: object (required) - Review data object
- index: number (required) - Position in array
- children: function or ReactNode - Render function or elements

DefaultReviewCard Props:
-----------------------
- review: object (required) - Must have: name, role, company, avatar, rating, text, project, date

ReviewCard Props:
----------------
- children: ReactNode - Card content
- className: string (optional) - Additional CSS classes

ReviewHeader Props:
------------------
- name: string (required)
- role: string (required)
- company: string (optional)
- avatar: string (required) - Image URL

ReviewRating Props:
------------------
- rating: number (required) - 0-5
- maxRating: number (default: 5)

ReviewContent Props:
-------------------
- text: string (required) - Review text

ReviewFooter Props:
------------------
- project: string (optional)
- date: string (required) - ISO date format

*/

// ============================================================================
// STYLING CUSTOMIZATION
// ============================================================================

/*

To customize styles, edit Reviews.module.css:

1. Change Colors:
   - Edit .reviewsSection background gradient
   - Edit .reviewCard border/shadow
   - Edit .starFilled color

2. Change Animation:
   - Edit .carouselCard transition timing
   - Adjust transform values in inline styles
   - Change radius for wider/narrower carousel

3. Change Layout:
   - Edit .carouselCard width
   - Adjust .reviewCard height
   - Change .carouselContainer perspective

4. Responsive:
   - Already includes mobile styles
   - Adjust breakpoints in media queries

*/

// ============================================================================
// COMMON CUSTOMIZATIONS
// ============================================================================

// Make it slower
<ReviewCarousel autoPlayInterval={8000}>

// Disable auto-play
<ReviewCarousel autoPlay={false}>

// Different data source
<ReviewCarousel>
  <ReviewCarousel.Container>
    {myApiData.map((item, i) => (
      <ReviewCarousel.Card key={item.id} review={item} index={i}>
        {(data) => <MyCustomCard data={data} />}
      </ReviewCarousel.Card>
    ))}
  </ReviewCarousel.Container>
</ReviewCarousel>

// Add event handlers
<ReviewCarousel.Card 
  review={review} 
  index={index}
  onClick={() => console.log('Clicked!')}
>
