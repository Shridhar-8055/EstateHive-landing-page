'use client';

import { useState } from 'react';
import ScrollAnimate from './ScrollAnimate';

const WHATSAPP_NUMBER = '919036317765';

const COUNTRY_CODES = [
  { code: '+91', country: 'India', flag: '🇮🇳', placeholder: '98765 43210' },
  { code: '+971', country: 'UAE', flag: '🇦🇪', placeholder: '50 123 4567' },
  { code: '+1', country: 'USA', flag: '🇺🇸', placeholder: '555 123 4567' },
  { code: '+44', country: 'UK', flag: '🇬🇧', placeholder: '7911 123456' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦', placeholder: '51 234 5678' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦', placeholder: '3312 3456' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼', placeholder: '5123 4567' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭', placeholder: '3612 3456' },
  { code: '+968', country: 'Oman', flag: '🇴🇲', placeholder: '9212 3456' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬', placeholder: '8123 4567' },
  { code: '+61', country: 'Australia', flag: '🇦🇺', placeholder: '412 345 678' },
  { code: '+49', country: 'Germany', flag: '🇩🇪', placeholder: '151 2345 6789' },
  { code: '+33', country: 'France', flag: '🇫🇷', placeholder: '6 12 34 56 78' },
  { code: '+86', country: 'China', flag: '🇨🇳', placeholder: '131 2345 6789' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
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
Phone: ${formData.countryCode} ${formData.phone}
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

    // Clear form after redirect
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      budget: '',
      message: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="bg-[#000000] py-16 sm:py-20 lg:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <ScrollAnimate>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#D4AF37] mb-4 text-center"
            style={{ fontFamily: '"Clash Display", sans-serif' }}
          >
            IF YOU DON'T WANT TO WAIT
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
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-[130px] sm:w-[140px] px-1 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-xs"
                >
                  {COUNTRY_CODES.map((country) => (
                    <option key={country.code} value={country.code} className="bg-[#000000]">
                      {country.flag} {country.country.slice(0, 3).toUpperCase()} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder={COUNTRY_CODES.find(c => c.code === formData.countryCode)?.placeholder || '98765 43210'}
                />
              </div>
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
                <option value="2Cr-3Cr" className="bg-[#000000]">₹2 Crores - ₹3 Crores</option>
                <option value="3Cr-5Cr" className="bg-[#000000]">₹3 Crores - ₹5 Crores</option>
                <option value="5Cr-10Cr" className="bg-[#000000]">₹5 Crores - ₹10 Crores</option>
                <option value="10Cr+" className="bg-[#000000]">₹10 Crores+</option>
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

            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold py-4 rounded-lg text-base sm:text-lg uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              SEND VIA WHATSAPP
            </button>
          </form>
        </ScrollAnimate>
      </div>
    </section>
  );
}
