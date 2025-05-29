import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-2xl font-semibold mb-6 text-primary-500">{t('contact.offices')}</h3>
      
      <div className="space-y-8">
        {/* Canada Number */}
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500">
              <MapPin className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium mb-1">🇨🇦 {t('contact.canada')}</h4>
            <p className="text-gray-600 mb-2">
              <Phone className="h-4 w-4 inline mr-2" />
              <a href="tel:+14384622027" className="hover:text-primary-500">+1 438 462 2027</a>
            </p>
          </div>
        </div>
        
        {/* UAE Number */}
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500">
              <MapPin className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium mb-1">🇦🇪 {t('contact.uae')}</h4>
            <p className="text-gray-600 mb-2">
              <Phone className="h-4 w-4 inline mr-2" />
              <a href="tel:+971524646007" className="hover:text-primary-500">+971 52 464 6007</a>
            </p>
          </div>
        </div>
        
        {/* Morocco Office */}
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500">
              <MapPin className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium mb-1">🇲🇦 {t('contact.morocco')}</h4>
            <p className="text-gray-600 mb-2">
              <Phone className="h-4 w-4 inline mr-2" />
              <a href="tel:+212529337239" className="hover:text-primary-500">+212 529 337 239</a>
            </p>
          </div>
        </div>
        
        {/* Georgia Office */}
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500">
              <MapPin className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium mb-1">🇬🇪 {t('contact.Georgia')}</h4>
            <p className="text-gray-600 mb-2">
              <Phone className="h-4 w-4 inline mr-2" />
              <a href="tel:+995593728654" className="hover:text-primary-500">+995 593 72 86 54</a>
            </p>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500">
              <Mail className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium mb-1">{t('contact.form.email')}</h4>
            <p className="text-gray-600">
              <a href="mailto:sokrat.immigration@gmail.com" className="hover:text-primary-500">
                sokrat.immigration@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
