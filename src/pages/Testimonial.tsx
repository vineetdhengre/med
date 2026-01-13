export const testimonialsData = [
    {
        id: 1,
        quote: "Finding the right healthcare position has never been simpler. Browse through opportunities and apply with just a few clicks.",
        authorName: "Dr. Satvik Prakash",
        authorTitle: "Healthcare Administrator at Mayo Clinic"
    },
    {
        id: 2,
        quote: "This platform revolutionized my healthcare career search. I secured my ideal nursing position in just three weeks!",
        authorName: "Dr. Anjali Mehta",
        authorTitle: "Registered Nurse at Johns Hopkins"
    },
    {
        id: 3,
        quote: "The finest healthcare job portal available. Navigating positions is effortless and matches my qualifications perfectly.",
        authorName: "Dr. Michael Thompson",
        authorTitle: "Medical Director at Cleveland Clinic"
    },
    {
        id: 4,
        quote: "I appreciate how straightforward it is to search and locate relevant healthcare positions. Saved me considerable time and effort.",
        authorName: "Dr. Sarah Lopez",
        authorTitle: "Hospital HR Manager at Cedars-Sinai"
    },
    {
        id: 5,
        quote: "Exceptional healthcare recruitment platform! The job matching system is highly accurate. I received multiple physician offers within days.",
        authorName: "Dr. Rajesh Kumar",
        authorTitle: "Cardiologist at Stanford Health"
    }
];

type TestimonialSliderProps = {
    currentIndex: number;
    onNext: () => void;
    onPrevious: () => void;
    onIndicatorClick?: (index: number) => void;
};

export default function TestimonialSlider({ currentIndex, onNext, onPrevious, onIndicatorClick }: TestimonialSliderProps) {
    const currentTestimonial = testimonialsData[currentIndex];

    return (
        <div className="testimonial-slider">
            <div className="testimonial-content" key={currentIndex}>
                <div className="quote-container">
                    <div className="quote-icon">"</div>
                    <p className="quote-text">
                        {currentTestimonial.quote}
                    </p>
                </div>
                <div className="author-info">
                    <p className="author-name">{currentTestimonial.authorName}</p>
                    <p className="author-title">{currentTestimonial.authorTitle}</p>
                </div>
            </div>
            <div className="testimonial-nav">
                <button 
                    className="nav-btn" 
                    aria-label="Previous"
                    onClick={onPrevious}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button 
                    className="nav-btn" 
                    aria-label="Next"
                    onClick={onNext}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="testimonial-indicators">
                {testimonialsData.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                        onClick={() => onIndicatorClick && onIndicatorClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

