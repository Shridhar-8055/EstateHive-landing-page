'use client';

import { useState } from 'react';
import ScrollAnimate from './ScrollAnimate';

const WHATSAPP_NUMBER = '918861183261';
const TELEGRAM_USERNAME = 'ShridharSTeradal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildMessage = () => {
    return `Hi, I'm interested in Dubai real estate investment.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Budget: ${formData.budget || 'Not specified'}
Message: ${formData.message || 'N/A'}`;
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields (Name, Email, Phone)');
      return false;
    }
    return true;
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;
    const message = buildMessage();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const handleTelegram = () => {
    if (!validateForm()) return;
    const message = buildMessage();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="bg-[#000000] py-16 sm:py-20 lg:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <ScrollAnimate>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 text-center"
            style={{ fontFamily: '"Clash Display", sans-serif' }}
          >
            CONTACT US
          </h2>
        </ScrollAnimate>

        <ScrollAnimate delay={100}>
          <p className="text-white/80 text-center mb-8 sm:mb-10">
            Fill in your details and we'll reach out to schedule your strategy session.
          </p>
        </ScrollAnimate>

        <ScrollAnimate delay={150}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-white/80 text-sm mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white/80 text-sm mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white/80 text-sm mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-white/80 text-sm mb-2">
                Investment Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
              >
                <option value="" className="bg-[#000000]">Select your budget range</option>
                <option value="50L-1Cr" className="bg-[#000000]">₹50 Lakhs - ₹1 Crore</option>
                <option value="1Cr-2Cr" className="bg-[#000000]">₹1 Crore - ₹2 Crores</option>
                <option value="2Cr-5Cr" className="bg-[#000000]">₹2 Crores - ₹5 Crores</option>
                <option value="5Cr+" className="bg-[#000000]">₹5 Crores+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-white/80 text-sm mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                placeholder="Tell us about your investment goals..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold py-4 rounded-lg text-sm sm:text-base uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WHATSAPP
              </button>
              <button
                type="button"
                onClick={handleTelegram}
                className="flex-1 bg-[#0088cc] hover:bg-[#006699] text-white font-extrabold py-4 rounded-lg text-sm sm:text-base uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(0,136,204,0.4)] flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                TELEGRAM
              </button>
            </div>
          </form>
        </ScrollAnimate>
      </div>
    </section>
  );
}
