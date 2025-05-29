import { MapPin, Phone, Mail } from 'lucide-react';

interface OfficeProps {
  label: string;
  phone: string;
  flag: string;
}

const OfficeInfo = ({ label, phone, flag }: OfficeProps) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500">
        <MapPin className="h-6 w-6" />
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-medium mb-1">
        {flag} {label}
      </h4>
      <p className="text-gray-600">
        <Phone className="h-4 w-4 inline mr-2" />
        <a href={`tel:${phone}`} className="hover:text-primary-500">
          {phone}
        </a>
      </p>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-2xl font-semibold mb-6 text-primary-500">
        Office Contacts
      </h3>

      <div className="space-y-8">
        {/* Number Canada */}
        <OfficeInfo
          label="Number Canada"
          phone="+14384622027"
          flag="🇨🇦"
        />

        {/* Number UAE */}
        <OfficeInfo
          label="Number UAE"
          phone="+971524646007"
          flag="🇦🇪"
        />

        {/* Morocco Office */}
        <OfficeInfo
          label="Office Morocco"
          phone="+212529337239"
          flag="🇲🇦"
        />

        {/* Office Georgia */}
        <OfficeInfo
          label="Office Georgia"
          phone="+995591234567"
          flag="🇬🇪"
        />

        {/* Email */}
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500">
              <Mail className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium mb-1">Email</h4>
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
