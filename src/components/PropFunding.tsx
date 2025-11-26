'use client';

import { useState, useRef, useEffect } from 'react';
import ScrollAnimate from './ScrollAnimate';

export default function PropFunding() {
    const images = ['/fav1.png', '/fav2.png', '/fav3.png', '/fav4.png', '/fav5.webp', '/fav6.webp', '/fav7.webp'];
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Testimonials data (placeholders - will be updated with real content)
    const testimonials = [
        {
            name: "Andy",
            title: "Hear about Andy's Story with Quantum Algo....",
            video: "", // Video URL/embed to be added
            text1: "Without joining Quantum Algo, I probably wouldn't have gone anywhere in my trading journey.",
            text2: "Making a $14k pay-out in a week with a 300k account is humbly believable and impressive."
        },
        {
            name: "Testimonial 2",
            title: "Hear about Testimonial 2's Story with Quantum Algo....",
            video: "",
            text1: "Testimonial text 1 here.",
            text2: "Testimonial text 2 here."
        },
        {
            name: "Testimonial 3",
            title: "Hear about Testimonial 3's Story with Quantum Algo....",
            video: "",
            text1: "Testimonial text 1 here.",
            text2: "Testimonial text 2 here."
        }
    ];

    const scrollToSlide = (index: number) => {
        if (carouselRef.current) {
            const container = carouselRef.current;
            const slides = container.children;
            if (slides[index]) {
                const slide = slides[index] as HTMLElement;
                const containerWidth = container.offsetWidth;
                const slideLeft = slide.offsetLeft;
                const slideWidth = slide.offsetWidth;
                const scrollPosition = slideLeft - (containerWidth / 2) + (slideWidth / 2);

                container.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
                setActiveSlide(index);
            }
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const container = carouselRef.current;
            const containerWidth = container.offsetWidth;
            const scrollLeft = container.scrollLeft;
            const centerPosition = scrollLeft + containerWidth / 2;

            // Find which slide is closest to center
            let closestIndex = 0;
            let closestDistance = Infinity;

            Array.from(container.children).forEach((child, index) => {
                const slide = child as HTMLElement;
                const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
                const distance = Math.abs(centerPosition - slideCenter);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveSlide(closestIndex);
        }
    };

    return (
        <section>
            {/* Dark Purple Section - Stop Trading */}
            <div className="bg-[#2B2265] py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                {/* Section Header */}
                <ScrollAnimate>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-[#A60D60] mb-2"
                        style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                    >
                        <strong><em>Stop Trading</em></strong>
                    </h2>
                    <h3
                        className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-10"
                        style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                    >
                        <strong><em>With Your 'Lunch Money' And Start Making Life-Changing Trades With Prop Funding</em></strong>
                    </h3>
                </ScrollAnimate>

                {/* Content */}
                <div className="space-y-6 max-w-3xl mx-auto">
                    <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                        It's so hard to make real money trading forex with your leftover 9-5 salary (or 'lunch money' as I used to call it).
                    </p>

                    <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                        Even if you identify a profitable trade… you're constantly one step behind, without the capital to make it worthwhile.
                    </p>

                    {/* Highlighted Box */}
                    <div className="bg-[#3A2B82] rounded-lg py-4 px-6 my-8">
                        <p className="text-white font-bold text-lg md:text-xl leading-relaxed">
                            You can trade with the prop firm's capital… with no liability for a loss.
                        </p>
                    </div>

                    <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                        A <span className="bg-[#1a1a1a] text-white font-bold px-2 py-1">4% monthly withdrawal</span> might not mean anything but when you're trading with $600k it's <span className="bg-[#1a1a1a] text-white font-bold px-2 py-1">$18,000 after your profit split on average</span> – more than most people make from a full-time income.
                    </p>

                    <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                        Most people failing usually don't have the strategies, the consistency or the mindset to win.
                    </p>
                </div>


                {/* CTA Button */}
                <div className="mt-12 px-4">
                    <a
                        href="#apply"
                        className="inline-block w-full sm:w-auto bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-black py-4 sm:py-5 px-8 sm:px-24 md:px-32 rounded-full text-base sm:text-lg md:text-xl uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)] text-center"
                    >
                        I NEED TO APPLY NOW
                    </a>
                </div>
            </div>
            </div>

            {/* Marquee Section */}
            <div className="bg-[#A60D60] border-y-4 border-[#A60D60] py-3 sm:py-4 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center shrink-0">
                            <img src="/654bc818ced0f694add96fb4_Vector.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-4 mr-1 shrink-0" />
                            <img src="/fox28.png" alt="FOX 28" className="h-5 sm:h-7 shrink-0" />
                            <span className="text-black font-bold text-sm sm:text-xl whitespace-nowrap ml-2">100% Of Profits No Profit Share To Us</span>

                            <img src="/654bc818ced0f694add96fb4_Vector.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-4 mr-1 shrink-0" />
                            <img src="/digital-journal.png" alt="Digital Journal" className="h-8 sm:h-11 shrink-0" />
                            <span className="text-black font-bold text-sm sm:text-xl whitespace-nowrap ml-2">$54M Funded</span>

                            <img src="/654bc818ced0f694add96fb4_Vector.svg" alt="" className="w-6 h-6 sm:w-8 sm:h-8 ml-3 sm:ml-4 mr-1 shrink-0" />
                            <img src="/marketwatch.png" alt="MarketWatch" className="h-5 sm:h-7 shrink-0" />
                            <span className="text-black font-bold text-sm sm:text-xl whitespace-nowrap ml-2">1-5% Draw Downs Low Risk</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* EA Funding Section */}
            <div className="bg-white pb-8 md:pb-12 w-full">
                <div className="max-w-5xl mx-auto px-4 md:px-6">
                    <div className="bg-white py-16 md:py-24 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <div className="max-w-3xl mx-auto px-4 md:px-6">
                    {/* Magenta Arrow Indicator */}
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center gap-1">
                            <div className="w-8 h-0.5 bg-[#A60D60]" />
                            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[8px] border-l-[#A60D60]" />
                        </div>
                    </div>

                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 900 }}
                        >
                            Our EA Has Secured<br />
                            <span className="text-[#A60D60]">$54,000,000+</span> In Funding<br />
                            From The World's Top Prop Firms
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="text-left space-y-6">
                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                            Firms like FTMO don't give out their funded accounts like candy.
                        </p>

                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                            You must be a serious pro trader to get their backing... use my EA to pass the prop challenge, like 100s of people have done before you!
                        </p>

                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                            Our EA will work with any Prop Firm that allows EA's - <span className="font-black">its not HFT.</span>
                        </p>

                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                            The HFT passing is a separate gig to help you...
                        </p>

                        <div className="text-gray-800 font-semibold text-lg leading-relaxed">
                            <p>1) Get Quick Capital</p>
                            <p>2) Use our strategies on your funded account</p>
                        </div>

                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                            That means in 30 days you could be getting your first healthy pay-out.
                        </p>
                    </div>

                    {/* FTMO Image */}
                    <div className="mt-8 sm:mt-10 px-2 sm:px-0">
                        <img
                            src="/ftmo.png"
                            alt="Prop Firm Logos"
                            className="w-full h-auto scale-100 sm:scale-110 md:scale-125"
                        />
                    </div>

                    {/* Carousel Section */}
                    <div className="mt-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
                        <div className="relative overflow-hidden">
                            {/* Carousel Container */}
                            <div
                                ref={carouselRef}
                                onScroll={handleScroll}
                                className="flex gap-4 sm:gap-8 overflow-x-auto snap-x snap-mandatory pb-8"
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                    paddingLeft: 'calc(50vw - 140px)',
                                    paddingRight: 'calc(50vw - 140px)'
                                }}
                            >
                                {images.map((image, index) => {
                                    const isActive = index === activeSlide;
                                    return (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            // Move to next image when clicking on current
                                            const nextIndex = (index + 1) % images.length;
                                            scrollToSlide(nextIndex);
                                        }}
                                        className={`flex-shrink-0 snap-center transition-all duration-300 w-[280px] sm:w-[320px] cursor-pointer`}
                                    >
                                        <div className={`relative transition-all duration-300 ${
                                            isActive ? 'scale-105' : 'scale-95 opacity-70'
                                        }`}>
                                            <img
                                                src={image}
                                                alt={`Proof ${index + 1}`}
                                                className="w-full h-auto rounded-xl shadow-lg"
                                            />
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>

                            {/* Carousel Dots */}
                            <div className="flex justify-center gap-1.5 sm:gap-2 mt-6">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToSlide(index)}
                                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                                            index === activeSlide ? 'bg-[#A60D60] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>

            {/* New Section - Outside Floating Card */}
            <div className="bg-white py-16 md:py-24 w-full">
                <div className="max-w-5xl mx-auto px-4 md:px-6">
                    {/* Section Header */}
                    <ScrollAnimate>
                        <div className="text-center">
                            <h2
                                className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight"
                                style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 900 }}
                            >
                                Why This Forex 'Swiss Army Knife' Is The <span className="italic">ONLY</span> Trading System You'll Ever Need…
                            </h2>
                        </div>
                    </ScrollAnimate>

                    {/* Collage Image */}
                    <div className="mt-12 -mx-4 sm:-mx-12 md:-mx-36 lg:-mx-52">
                        <img
                            src="/collage%20image.png"
                            alt="Press Coverage Collage"
                            className="w-full h-auto sm:scale-110 md:scale-125 lg:scale-140"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="mt-16 max-w-2xl mx-auto space-y-6">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            So many traders try algo trading with EAs and fail…
                        </h3>

                        <p className="text-gray-800 text-lg leading-relaxed font-semibold">
                            That's because EAs are not 'set and forget' like so many gurus out there will tell you.
                        </p>

                        <p className="text-gray-800 text-lg leading-relaxed font-semibold">
                            Markets change and we must move with the markets and ensure we're running diversified trading portfolios.
                        </p>

                        <p className="text-gray-800 text-lg leading-relaxed font-semibold">
                            When the markets are trending - Banker can trade with the trend using a Trend Strategy.
                        </p>

                        <p className="text-gray-800 text-lg leading-relaxed font-semibold">
                            When the markets are ranging - we will do the same with a Ranging Strategy.
                        </p>

                        <p className="text-gray-800 text-lg leading-relaxed font-semibold">
                            There are even more ways to diversify than that really but that's a start.
                        </p>

                        <p className="text-gray-800 text-lg leading-relaxed font-semibold">
                            Banker EA is an incredibly powerful tool that will help you trade on autopilot…
                        </p>

                        <div className="bg-[#E8D4F0] p-6 rounded-lg">
                            <p className="text-gray-900 text-lg leading-relaxed font-semibold">
                                But only if you know how to use it.
                            </p>
                        </div>

                        <div className="bg-[#E8D4F0] p-6 rounded-lg">
                            <p className="text-gray-900 text-lg leading-relaxed font-semibold">
                                Having a tool is one thing - having the skills is another. We will give you the skills and knowledge too within our education.
                            </p>
                        </div>

                        <p className="text-gray-800 text-lg leading-relaxed font-semibold">
                            My team and I give you industry-leading guidance, support, and training materials to master the markets and become a wildly successful trader.
                        </p>
                    </div>

                    {/* Numbered Steps Section */}
                    <div className="mt-12 sm:mt-20 space-y-10 sm:space-y-16 px-4">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                            <div className="relative max-w-2xl w-full">
                                {/* Badge overlay */}
                                <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-20 sm:h-20 bg-[#A60D60] rounded-full flex items-center justify-center z-10 shadow-lg">
                                    <span className="text-white text-2xl sm:text-4xl font-black">1</span>
                                </div>
                                {/* Card */}
                                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-6 sm:p-8 pt-12 sm:pt-16">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 text-center">
                                        The New Way To Trade With EAs
                                    </h3>
                                </div>
                            </div>
                            <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-semibold mt-4 sm:mt-6 max-w-2xl text-center">
                                Most EA's stop working after a few weeks because the markets change - we show you how we overcome this and do things differently.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                            <div className="relative max-w-2xl w-full">
                                {/* Badge overlay */}
                                <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-20 sm:h-20 bg-[#A60D60] rounded-full flex items-center justify-center z-10 shadow-lg">
                                    <span className="text-white text-2xl sm:text-4xl font-black">2</span>
                                </div>
                                {/* Card */}
                                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-6 sm:p-8 pt-12 sm:pt-16">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 text-center">
                                        Cover All Market Conditions At The Same Time.
                                    </h3>
                                </div>
                            </div>
                            <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-semibold mt-4 sm:mt-6 max-w-2xl text-center">
                                Ranging or trending... high-impact news... unlike the one trick ponies out there, our system is a 'Swiss army knife' that lets you dominate in all market conditions.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                            <div className="relative max-w-2xl w-full">
                                {/* Badge overlay */}
                                <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-20 sm:h-20 bg-[#A60D60] rounded-full flex items-center justify-center z-10 shadow-lg">
                                    <span className="text-white text-2xl sm:text-4xl font-black">3</span>
                                </div>
                                {/* Card */}
                                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-6 sm:p-8 pt-12 sm:pt-16">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 text-center">
                                        $50,000 In Funding To Start You Off
                                    </h3>
                                </div>
                            </div>
                            <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-semibold mt-4 sm:mt-6 max-w-2xl text-center">
                                Don't waste $1,000s on failed prop challenges or risk your own money at first – we will give you a $50,000 account as part of the programme to trade with.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center">
                            <div className="relative max-w-2xl w-full">
                                {/* Badge overlay */}
                                <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-20 sm:h-20 bg-[#A60D60] rounded-full flex items-center justify-center z-10 shadow-lg">
                                    <span className="text-white text-2xl sm:text-4xl font-black">4</span>
                                </div>
                                {/* Card */}
                                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-6 sm:p-8 pt-12 sm:pt-16">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 text-center">
                                        Proprietary Innovative Tools
                                    </h3>
                                </div>
                            </div>
                            <div className="text-gray-800 text-base sm:text-lg leading-relaxed font-semibold mt-4 sm:mt-6 max-w-2xl text-center space-y-4">
                                <p>
                                    We have Portfolio Finder - our own software to help review data so we can make 'better' data driven decisions on what to run and how to set up your diversified trading portfolios.
                                </p>
                                <p>
                                    You can't get these tools anywhere else.
                                </p>
                            </div>
                            {/* Apply Now Button */}
                            <div className="mt-6 sm:mt-8 max-w-2xl w-full">
                                <a
                                    href="#apply"
                                    className="block w-full bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-black py-4 rounded-full text-base sm:text-lg uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)] text-center"
                                >
                                    APPLY NOW
                                </a>
                            </div>
                            {/* Stock Graph Image */}
                            <div className="mt-20 sm:mt-40 -mx-4 sm:-mx-24 md:-mx-40 lg:-mx-56 -mb-16 sm:-mb-32 md:-mb-48 relative z-10">
                                <img
                                    src="/stock%20graph.png"
                                    alt="Stock Graph"
                                    className="w-full h-auto sm:scale-110 md:scale-125 lg:scale-140"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Guaranteed Section */}
            <div className="bg-[#2B2265] py-16 sm:py-24 md:py-32 relative">
                <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                    {/* Bull Graphic */}
                    <ScrollAnimate>
                        <div className="mb-6 sm:mb-8 flex justify-center">
                            <img
                                src="/bigbull.png"
                                alt="Bull Graphic"
                                className="w-40 sm:w-52 md:w-64 h-auto"
                            />
                        </div>
                    </ScrollAnimate>

                    {/* Guaranteed Title */}
                    <ScrollAnimate delay={100}>
                        <h2
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#A60D60] mb-2 sm:mb-4"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 900 }}
                        >
                            Guaranteed
                        </h2>

                        {/* $50,000 Account */}
                        <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 sm:mb-12">
                            $50,000 Account
                        </h3>
                    </ScrollAnimate>

                    {/* Guarantee Text */}
                    <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto relative z-30">
                        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-semibold">
                            We guarantee to give you time back in your day compared to manually trading, drawing lines on charts and making all of them trading decisions can be totally exhausting, right?
                        </p>

                        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-semibold">
                            <span className="font-bold">We guarantee you funding</span> so you can then use our strategies on your funded account and start making withdrawals from your funded accounts.
                        </p>

                        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-semibold">
                            Even 2-3 hours a day is 800+ hours a year. That's 35 days spent drawing lines on charts trying to predict the future.
                        </p>

                        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-semibold">
                            We guarantee to give you all of the tools necessary to be successful, as so many of our members already are.
                        </p>

                        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-semibold">
                            We guarantee you a 5 figure funded account within your first 30 days so you can quickly apply what you've learned with our automated strategies.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 sm:mt-12 relative z-40 px-4">
                        <a
                            href="#how-it-works"
                            className="inline-block w-full sm:w-auto bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-black py-4 sm:py-5 px-8 sm:px-16 md:px-24 rounded-full text-base sm:text-lg md:text-xl uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)] text-center"
                        >
                            SHOW ME HOW THIS WORKS
                        </a>
                    </div>
                </div>
            </div>

            {/* Bull Graphic Overlay */}
            <div className="relative -mt-40 sm:-mt-60 md:-mt-80 lg:-mt-96 z-10">
                <img
                    src="/bull%20graphic.webp"
                    alt="Bull Graphic"
                    className="w-full h-auto"
                />
            </div>

            {/* Testimonial Video Section */}
            <div className="bg-gray-50 py-12 sm:py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    {/* Magenta Arrow Indicator */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="flex items-center gap-1">
                            <div className="w-8 sm:w-12 h-0.5 bg-[#A60D60]" />
                            <div className="w-2 h-2 rounded-full bg-[#A60D60]" />
                        </div>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-8 sm:mb-12 leading-tight px-4">
                        Join Traders Who Are Achieving<br />
                        Consistent 4-5 Figures Months...
                    </h2>

                    {/* Video and Testimonial Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                        {/* Video Placeholder */}
                        <div className="relative">
                            <div className="bg-black rounded-2xl sm:rounded-3xl overflow-hidden aspect-video flex items-center justify-center">
                                {/* Video thumbnail will go here */}
                                <div className="text-center">
                                    <div className="w-14 h-14 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </div>
                                    <p className="text-white text-xs sm:text-sm">{testimonials[activeTestimonial].name} Video</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Card */}
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4">
                                {testimonials[activeTestimonial].title}
                            </h3>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4 sm:mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Text Box */}
                            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
                                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                                    {testimonials[activeTestimonial].text1}
                                </p>
                                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                                    {testimonials[activeTestimonial].text2}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2 mt-8 sm:mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`transition-all ${
                                    index === activeTestimonial
                                        ? 'w-6 sm:w-8 h-2 bg-[#A60D60]'
                                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                } rounded-full`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white py-8 sm:py-12 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
                    {/* QA Logo */}
                    <div className="mb-4 sm:mb-6 flex justify-center">
                        <img
                            src="/QA%20logo.png"
                            alt="QA"
                            className="h-12 sm:h-16 md:h-20 w-auto"
                        />
                    </div>

                    {/* Copyright Text */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg font-semibold">
                        Copyright © [2025]. All Rights Reserved. |{' '}
                        <a href="#terms" className="text-blue-600 hover:text-blue-800 underline">
                            Terms & Conditions
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
