import React from 'react';

const Contact = ({ showMessage }) => ( // Accept showMessage as prop
    <section id="contact" className="py-20 bg-black min-h-screen pt-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Get Started</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Ready to take your business to the cloud? Fill out the form below to get a free consultation and a custom quote.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); showMessage('Thank you! Your message has been sent.', 'bg-green-600'); }} className="max-w-xl mx-auto space-y-6 text-left">
                <div>
                    <label htmlFor="name" className="block text-gray-400 font-medium mb-1">Full Name</label>
                    <input type="text" id="name" name="name" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="John Doe" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-400 font-medium mb-1">Email Address</label>
                    <input type="email" id="email" name="email" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="you@example.com" required />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-400 font-medium mb-1">Your Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Tell us about your project..." required></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white text-lg font-bold py-3 rounded-xl hover:bg-red-700 transition-colors transform hover:-translate-y-1 shadow-lg">
                    Send Message
                </button>
            </form>
        </div>
    </section>
);

export default Contact;