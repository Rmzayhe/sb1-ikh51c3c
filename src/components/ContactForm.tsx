import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const destinations = [
    { id: 'canada', label: language === 'en' ? 'Canada' : 'كندا' },
    { id: 'western-europe', label: language === 'en' ? 'Western Europe' : 'أوروبا الغربية' },
    { id: 'eastern-europe', label: language === 'en' ? 'Eastern Europe' : 'أوروبا الشرقية' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        to_email: 'sokrat.immigration@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        destination: formData.destination,
        message: formData.message,
      };

      await emailjs.send(
        'service_mh3cwko',
        'template_2apds1i',
        templateParams,
        'ncUjMSFmfK8gMTiCG'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
          {language === 'en' 
            ? 'Thank you for your message. We will contact you soon!'
            : 'شكراً لرسالتك. سنتواصل معك قريباً!'}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
          {language === 'en'
            ? 'Sorry, there was an error sending your message. Please try again or contact us directly.'
            : 'عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.'}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.phone')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">
          {language === 'en' ? 'Preferred Destination' : 'الوجهة المفضلة'}
        </label>
        <select
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">{language === 'en' ? 'Select a destination' : 'اختر وجهة'}</option>
          {destinations.map((dest) => (
            <option key={dest.id} value={dest.id}>
              {dest.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn btn-primary w-full flex items-center justify-center ${
          isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        <Send className="h-5 w-5 mr-2" />
        {isSubmitting 
          ? (language === 'en' ? 'Sending...' : 'جاري الإرسال...')
          : t('contact.form.submit')}
      </button>
    </form>
  );
};

export default ContactForm;