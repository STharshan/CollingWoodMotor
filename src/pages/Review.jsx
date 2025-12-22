import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ReviewPage() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [showReviewBox, setShowReviewBox] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    // EmailJS Configuration
    const EMAILJS_SERVICE_ID = 'service_404lxe7';
    const EMAILJS_TEMPLATE_ID = 'template_z8n4quc';
    const EMAILJS_PUBLIC_KEY = 'tmUgtXKf_TwGrV1iE';

    // Load dark mode preference from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleStarClick = (starRating) => {
        setRating(starRating);
        setError('');
        setSubmitted(false);
        setLoading(false);

        if (starRating <= 3) {
            setShowReviewBox(true);
        } else {
            setShowReviewBox(false);
            window.open("https://www.google.com/search?sca_esv=da4b4771c25c6391&hl=en&gl=LK&sxsrf=AE3TifPuBCwgtu8PAeMyBTHCIOlleIj5-Q:1766340354921&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMQpWj96m5OTtFudyl816UYflGpZP1UBOO2Qaflyy13wx1WDY38wh-Otav68_eceElxBrnkHxLJunnakDArXaaS1SYpmMGQGNzFKjL0Yb5DNR8_vlfA%3D%3D&q=Collingwood+motors+Reviews&sa=X&ved=2ahUKEwjj-KDLos-RAxWtr1YBHS8uPWQQ0bkNegQIIxAE&biw=1366&bih=633&dpr=1", "_blank", "noopener,noreferrer");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const templateParams = {
            to_name: 'Business Owner',
            customer_name: name,
            customer_email: email,
            customer_phone: phone || 'Not provided',
            rating: rating,
            review_text: reviewText,
            star_rating: '⭐'.repeat(rating),
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };

        try {
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', response);
            setLoading(false);
            setSubmitted(true);

            setTimeout(() => {
                setRating(0);
                setShowReviewBox(false);
                setReviewText('');
                setName('');
                setEmail('');
                setPhone('');
                setSubmitted(false);
                setLoading(false);
            }, 4000);

        } catch (error) {
            console.error('Email sending failed:', error);
            setError('Failed to send review. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-amber-50 dark:bg-black flex items-center justify-center p-4 sm:p-6 md:p-8 transition-colors duration-300">
            <div className="w-full mt-20 max-w-2xl">

                {/* Main Card */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-orange-200/50 dark:shadow-blue-900/50 overflow-hidden backdrop-blur-sm transition-colors duration-300">
                    {/* Header Section */}
                    <div className="bg-[#028BFA] dark:bg-blue-600 px-6 sm:px-8 md:px-12 py-8 transition-colors duration-300">
                        <div className="text-center">
                            <div className="inline-block mb-4">
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-4 shadow-lg">
                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                                Rate Your Experience
                            </h1>
                            <p className="text-white/90 text-base sm:text-lg font-medium">
                                Your feedback helps us serve you better
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
                        {/* Star Rating */}
                        <div className="mb-8">
                            <p className="text-center text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base font-medium transition-colors duration-300">
                                How would you rate our service?
                            </p>
                            <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="transform transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-blue-500 rounded-full p-1"
                                        aria-label={`Rate ${star} stars`}
                                    >
                                        <svg
                                            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-all duration-200 ${star <= (hoveredRating || rating)
                                                    ? 'text-amber-400 dark:text-yellow-400 fill-current drop-shadow-lg'
                                                    : 'text-gray-300 dark:text-gray-600 fill-current'
                                                }`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            {rating > 0 && (
                                <p className="text-center mt-4 text-lg sm:text-xl font-semibold text-[#028BFA] dark:text-blue-400 animate-fade-in transition-colors duration-300">
                                    {rating === 1 && "We're sorry to hear that 😢"}
                                    {rating === 2 && "We can do better 😕"}
                                    {rating === 3 && "Thanks for your feedback 🙂"}
                                    {rating === 4 && "Great! Thank you! 😊"}
                                    {rating === 5 && "Excellent! We appreciate you! 🌟"}
                                </p>
                            )}
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-6 bg-red-50 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-600 rounded-xl p-4 animate-fade-in transition-colors duration-300">
                                <p className="text-red-700 dark:text-red-300 text-sm sm:text-base text-center font-medium">
                                    {error}
                                </p>
                            </div>
                        )}

                        {/* Review Box (for 1-3 stars) */}
                        {showReviewBox && !submitted && (
                            <div className="animate-slide-down">
                                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 sm:p-8 border-2 border-[#028BFA] dark:border-blue-500 shadow-lg transition-colors duration-300">
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
                                        <svg className="w-6 h-6 text-[#028BFA] dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Tell us more
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base transition-colors duration-300">
                                        We'd love to hear your feedback so we can improve our service.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-orange-400 dark:focus:border-blue-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-blue-900/50 outline-none transition-all text-sm sm:text-base"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                                                Your Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-orange-400 dark:focus:border-blue-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-blue-900/50 outline-none transition-all text-sm sm:text-base"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                                                Phone Number <span className="text-gray-400 dark:text-gray-500 text-xs">(Optional)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-orange-400 dark:focus:border-blue-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-blue-900/50 outline-none transition-all text-sm sm:text-base"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="review" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                                                Your Feedback <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="review"
                                                value={reviewText}
                                                onChange={(e) => setReviewText(e.target.value)}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-orange-400 dark:focus:border-blue-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-blue-900/50 outline-none transition-all resize-none text-sm sm:text-base"
                                                placeholder="Please share your experience with us..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`w-full bg-[#028BFA] dark:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-blue-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''
                                                }`}
                                        >
                                            {loading ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                'Submit Review'
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* Success Message */}
                        {submitted && (
                            <div className="animate-fade-in">
                                <div className="bg-green-50 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-600 rounded-2xl p-6 sm:p-8 text-center transition-colors duration-300">
                                    <div className="inline-block bg-green-100 dark:bg-green-800 rounded-full p-4 mb-4 transition-colors duration-300">
                                        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-green-800 dark:text-green-300 mb-2 transition-colors duration-300">Thank You!</h3>
                                    <p className="text-green-700 dark:text-green-400 text-base sm:text-lg transition-colors duration-300">
                                        Your feedback has been sent to our team.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}