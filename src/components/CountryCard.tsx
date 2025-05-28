import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CountryCardProps {
  id: string;
  name: string;
  flagUrl: string;
  imageUrl: string;
  description: string;
}

const CountryCard = ({ id, name, flagUrl, imageUrl, description }: CountryCardProps) => {
  const { t, dir } = useLanguage();
  
  const ArrowIcon = () => (
    dir === 'ltr' ? <ArrowRight className="h-5 w-5" /> : <ArrowRight className="h-5 w-5 transform rotate-180" />
  );

  return (
    <motion.div
      className="country-card"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={imageUrl} 
          alt={name} 
          className="country-card-image"
        />
        <img 
          src={flagUrl} 
          alt={`${name} flag`} 
          className="country-card-flag"
        />
      </div>
      <div className="country-card-content">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/country/${id}`}
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          <span className="mr-2">{t('country.programs')}</span>
          <ArrowIcon />
        </Link>
      </div>
    </motion.div>
  );
};

export default CountryCard;