import { useState, useEffect } from 'react'
import './style.css';
import LoginSidebar from './loginSidebar';
import TestimonialSlider, { testimonialsData } from '../../pages/Testimonial';


export default function Login() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => 
                (prevIndex + 1) % testimonialsData.length
            );
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentTestimonialIndex((prevIndex) => 
            (prevIndex + 1) % testimonialsData.length
        );
    };

    const handlePrevious = () => {
        setCurrentTestimonialIndex((prevIndex) => 
            (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
        );
    };

    const handleIndicatorClick = (index : any) => {
        setCurrentTestimonialIndex(index);
    };

    return (
        <div className='login-main-container'>
            <div className="login-wrapper">
                {/* Left Panel - Login Form (60%) */}
                <div className="login-left-panel">
                    <LoginSidebar />
                </div>

                {/* Right Panel - Marketing/Testimonial (40%) */}
                <div className="login-right-panel">
                    <div className="testimonial-section">
                        <h2 className="testimonial-title">What's our LifeSaver Said.</h2>
                        <TestimonialSlider 
                            currentIndex={currentTestimonialIndex}
                            onNext={handleNext}
                            onPrevious={handlePrevious}
                            onIndicatorClick={handleIndicatorClick}
                        />
                    </div>

                    <div className="cta-card">
                        <div className="cta-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <h3 className="cta-title">Get your right path with our Team</h3>
                        <p className="cta-text">Be among the first one to experience the easiest way to become a LifeSaver.</p>
                        
                        {/* disable for now, will see what to do later */}
                        {/* <div className="cta-avatars">
                            <div className="avatar avatar-1"></div>
                            <div className="avatar avatar-2"></div>
                            <div className="avatar avatar-3"></div>
                            <div className="avatar-count">+2</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
