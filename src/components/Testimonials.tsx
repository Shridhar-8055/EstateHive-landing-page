'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollAnimate from './ScrollAnimate';

const testimonials = [
    {
        name: "Vishal S",
        date: "9 July",
        verified: true,
        title: "POW: A Comprehensive and Supportive Eco...",
        content: "As a seasoned trader, I was initially skeptical about yet another EA firm promising t..."
    },
    {
        name: "Tom",
        date: "7 July",
        verified: false,
        title: "I have been a POW member for many years...",
        content: "I have been a POW member for many years and I am very pleased with the product. The..."
    },
    {
        name: "morgan mitchell",
        date: "5 July",
        verified: false,
        title: "POW Banker Review 🔥",
        content: "POW Banker Review 🔥 POW Banker is easily one of the best EAs I've used. I've tried..."
    },
    {
        name: "Grant Rubenstein",
        date: "15 June",
        verified: false,
        title: "Joining POW has been the best...",
        content: "Joining POW has been the best investment I've made. They genuinely want you to succee..."
    },
    {
        name: "Graeme Frost",
        date: "13 June",
        verified: false,
        title: "POW is the best community and EA around...",
        content: "POW is the best community and EA around in my opinion. They support your learning wi..."
    },
    {
        name: "Lewis",
        date: "May 11, 2023",
        verified: true,
        title: "POW....ER! Amazing Experience",
        content: "POW….ER! After joining POW only just a few weeks ago, i am already starting to fully..."
    },
    {
        name: "Mark Brislee",
        date: "Aug 15, 2023",
        verified: true,
        title: "Following POW for over 2 years",
        content: "I've been following Pow for over 2 years, finally got involved 2 weeks ago, the Bank..."
    },
    {
        name: "Daniel Mejia",
        date: "Aug 30, 2023",
        verified: true,
        title: "Got my funded account with MFF",
        content: "I've been using Banker EA for a few months now and I already managed to get my fund..."
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Responsive cards per view: 1 on mobile, 2 on tablet, 5 on desktop
    const getCardsPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1;
            if (window.innerWidth < 1024) return 2;
            return 5;
        }
        return 5;
    };
    const [cardsPerView, setCardsPerView] = useState(5);

    // Update cards per view on resize
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCardsPerView(getCardsPerView());
            const handleResize = () => setCardsPerView(getCardsPerView());
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const totalSlides = Math.ceil(testimonials.length / cardsPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const visibleTestimonials = testimonials.slice(
        currentIndex * cardsPerView,
        currentIndex * cardsPerView + cardsPerView
    );

    return (
        <section className="bg-[#2B2265] pt-20 md:pt-24 pb-16 md:pb-20">
            <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
                {/* Section Header */}
                <ScrollAnimate>
                    <h2
                        className="text-2xl md:text-3xl font-black text-white text-center mb-4"
                        style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic' }}
                    >
                        <em>See what our traders have to say...</em>
                    </h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Real reviews from real traders who are using our system to achieve consistent results.
                    </p>
                </ScrollAnimate>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 sm:px-8">
                        {visibleTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 shadow-lg"
                            >
                                {/* Trustpilot Stars */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <div key={star} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                                                <Star className="w-3 h-3 text-white fill-white" />
                                            </div>
                                        ))}
                                    </div>
                                    {testimonial.verified && (
                                        <span className="text-gray-500 text-xs flex items-center gap-1">
                                            <svg className="w-3 h-3 text-[#00b67a]" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Verified
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-1">
                                    {testimonial.title}
                                </h3>

                                {/* Content */}
                                <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3">
                                    {testimonial.content}
                                </p>

                                {/* Author */}
                                <p className="text-gray-900 text-xs">
                                    <span className="font-bold">{testimonial.name}</span>, {testimonial.date}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>
                </div>

                {/* Trustpilot Footer */}
                <div className="text-center mt-8">
                    <p className="text-gray-400 text-sm">
                        Rated <span className="text-white font-bold">4.3</span> / 5 based on <span className="text-white underline">458 reviews</span>. Showing our 3, 4 & 5 star reviews.
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-2">
                        <Star className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                        <span className="text-white text-sm font-semibold">Trustpilot</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
