export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

export interface DoctorInfo {
  name: string;
  title: string;
  experience: string;
  specialization: string;
}

export interface ClinicData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  hours: {
    weekdays: string;
    weekend: string;
  };
  services: Service[];
  doctors: DoctorInfo[];
  emergency: string;
  theme?: {
    primaryColor: string;
    accentColor: string;
  };
}

// Multi-tenant clinic data
const allClinics: Record<string, ClinicData> = {
  "dental-clinic-1": {
    id: "dental-clinic-1",
    name: "Bright Smile Dental Clinic",
    tagline: "Your Smile, Our Priority",
    description: "Professional dental care with advanced technology and experienced doctors",
    location: "123 Main Street, Karachi, Pakistan",
    phone: "+92-300-1234567",
    whatsapp: "+92-300-1234567",
    email: "info@brightsmile.pk",
    website: "www.brightsmile.pk",
    hours: {
      weekdays: "Monday - Friday: 10:00 AM - 8:00 PM",
      weekend: "Saturday: 10:00 AM - 8:00 PM | Sunday: Closed",
    },
    services: [
      {
        id: "cleaning",
        name: "Teeth Cleaning",
        description: "Professional cleaning to remove plaque and tartar",
        price: "Rs. 2,000 - 3,500",
        duration: "30-45 minutes",
      },
      {
        id: "braces",
        name: "Orthodontic Braces",
        description: "Straighten your teeth with modern braces",
        price: "Rs. 50,000 - 150,000",
        duration: "18-24 months treatment",
      },
      {
        id: "whitening",
        name: "Teeth Whitening",
        description: "Professional teeth whitening for a brighter smile",
        price: "Rs. 5,000 - 8,000",
        duration: "1 hour",
      },
      {
        id: "root-canal",
        name: "Root Canal Treatment",
        description: "Save your tooth with root canal therapy",
        price: "Rs. 8,000 - 15,000",
        duration: "1-2 hours",
      },
      {
        id: "implants",
        name: "Dental Implants",
        description: "Replace missing teeth with dental implants",
        price: "Rs. 40,000 - 80,000 per tooth",
        duration: "3-6 months",
      },
      {
        id: "extraction",
        name: "Tooth Extraction",
        description: "Safe and painless tooth extraction",
        price: "Rs. 2,000 - 5,000",
        duration: "15-30 minutes",
      },
    ],
    doctors: [
      {
        name: "Dr. Ahmed Khan",
        title: "Chief Dentist & Founder",
        experience: "10+ years",
        specialization: "General Dentistry & Orthodontics",
      },
      {
        name: "Dr. Fatima Ali",
        title: "Senior Dentist",
        experience: "8+ years",
        specialization: "Cosmetic & Restorative Dentistry",
      },
      {
        name: "Dr. Hassan Raza",
        title: "Dental Surgeon",
        experience: "6+ years",
        specialization: "Oral Surgery & Implantology",
      },
    ],
    emergency: "Available 24/7 for emergencies - Call +92-300-1234567",
    theme: {
      primaryColor: "#0284c7",
      accentColor: "#0ea5e9",
    },
  },

  // Add more clinics here
  "dental-clinic-2": {
    id: "dental-clinic-2",
    name: "Perfect Teeth Clinic",
    tagline: "Smile with Confidence",
    description: "Modern dental solutions for the whole family",
    location: "456 Health Avenue, Lahore, Pakistan",
    phone: "+92-300-9876543",
    whatsapp: "+92-300-9876543",
    email: "contact@perfectteeth.pk",
    website: "www.perfectteeth.pk",
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 7:00 PM",
      weekend: "Saturday: 10:00 AM - 5:00 PM | Sunday: Closed",
    },
    services: [
      {
        id: "cleaning",
        name: "Professional Cleaning",
        description: "Deep cleaning for healthy teeth",
        price: "Rs. 1,500 - 2,500",
        duration: "45 minutes",
      },
      {
        id: "braces",
        name: "Modern Braces",
        description: "Clear and traditional braces available",
        price: "Rs. 45,000 - 120,000",
        duration: "18-24 months",
      },
      {
        id: "whitening",
        name: "Smile Whitening",
        description: "Professional whitening treatment",
        price: "Rs. 4,000 - 7,000",
        duration: "1.5 hours",
      },
      {
        id: "root-canal",
        name: "Root Canal",
        description: "Advanced pain-free root canal",
        price: "Rs. 7,000 - 12,000",
        duration: "1-2 hours",
      },
      {
        id: "implants",
        name: "Dental Implants",
        description: "Premium implant solutions",
        price: "Rs. 35,000 - 75,000 per tooth",
        duration: "3-6 months",
      },
      {
        id: "cosmetic",
        name: "Cosmetic Dentistry",
        description: "Veneers and smile design",
        price: "Rs. 15,000 - 50,000",
        duration: "2-3 weeks",
      },
    ],
    doctors: [
      {
        name: "Dr. Ayesha Khan",
        title: "Founder & Director",
        experience: "12+ years",
        specialization: "Cosmetic Dentistry",
      },
      {
        name: "Dr. Muhammad Hassan",
        title: "Senior Dentist",
        experience: "9+ years",
        specialization: "Implantology",
      },
    ],
    emergency: "24/7 Emergency: +92-300-9876543",
    theme: {
      primaryColor: "#059669",
      accentColor: "#10b981",
    },
  },
};

// Get clinic data by ID
export const getClinicData = (clientId: string): ClinicData => {
  return allClinics[clientId] || allClinics["dental-clinic-1"];
};

// Get all clinic IDs (useful for admin)
export const getAllClinicIds = (): string[] => {
  return Object.keys(allClinics);
};

// Default export for backward compatibility
export const clinicData: ClinicData = allClinics["dental-clinic-1"];
