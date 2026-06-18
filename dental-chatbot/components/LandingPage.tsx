'use client';

interface HeaderProps {
  onContactClick?: () => void;
}

export const Header = ({ onContactClick }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">😁</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Bright<span className="text-primary-600">Smile</span>
            </h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              Contact
            </button>
          </div>

          <button
            onClick={onContactClick}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Chat Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export const HeroSection = ({ onChatClick }: { onChatClick: () => void }) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Your <span className="text-primary-600">Smile</span>, Our Priority
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional dental care with advanced technology and experienced doctors. Welcome to Bright Smile Dental Clinic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onChatClick}
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
            >
              Chat with AI Assistant
            </button>
            <button
              onClick={() => window.location.href = 'https://wa.me/923001234567'}
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-bold py-3 px-8 rounded-lg transition"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-6xl mb-4">😁</div>
              <h3 className="text-3xl font-bold mb-2">We Care About Your Smile</h3>
              <p>Expert dental care for the whole family</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <span>Modern Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <span>Experienced Doctors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✓</span>
                  <span>Comfortable Environment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      icon: '🦷',
      name: 'Teeth Cleaning',
      description: 'Professional cleaning to remove plaque and tartar',
    },
    {
      icon: '📐',
      name: 'Orthodontic Braces',
      description: 'Straighten your teeth with modern braces',
    },
    {
      icon: '✨',
      name: 'Teeth Whitening',
      description: 'Professional whitening for a brighter smile',
    },
    {
      icon: '🔬',
      name: 'Root Canal Treatment',
      description: 'Save your tooth with root canal therapy',
    },
    {
      icon: '🦷',
      name: 'Dental Implants',
      description: 'Replace missing teeth with implants',
    },
    {
      icon: '🔧',
      name: 'Tooth Extraction',
      description: 'Safe and painless tooth extraction',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Our Services
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Comprehensive dental care for all your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-xl hover:shadow-lg hover:bg-primary-50 transition duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TeamSection = () => {
  const doctors = [
    {
      name: 'Dr. Ahmed Khan',
      title: 'Chief Dentist & Founder',
      experience: '10+ years',
      specialty: 'General Dentistry & Orthodontics',
      emoji: '👨‍⚕️',
    },
    {
      name: 'Dr. Fatima Ali',
      title: 'Senior Dentist',
      experience: '8+ years',
      specialty: 'Cosmetic & Restorative Dentistry',
      emoji: '👩‍⚕️',
    },
    {
      name: 'Dr. Hassan Raza',
      title: 'Dental Surgeon',
      experience: '6+ years',
      specialty: 'Oral Surgery & Implantology',
      emoji: '👨‍⚕️',
    },
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Our Expert Team
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Meet our experienced dental professionals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center"
            >
              <div className="text-6xl mb-4">{doctor.emoji}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {doctor.name}
              </h3>
              <p className="text-primary-600 font-semibold mb-2">
                {doctor.title}
              </p>
              <p className="text-gray-600 mb-4">{doctor.specialty}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Experience:</span>{' '}
                  {doctor.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactSection = ({ onChatClick }: { onChatClick: () => void }) => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-8 text-center hover:bg-opacity-20 transition">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p>123 Main Street, Karachi, Pakistan</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-8 text-center hover:bg-opacity-20 transition">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <a href="tel:+923001234567" className="hover:underline">
              +92-300-1234567
            </a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-8 text-center hover:bg-opacity-20 transition">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Chat Now
            </a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-8 text-center hover:bg-opacity-20 transition">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a href="mailto:info@brightsmile.pk" className="hover:underline">
              info@brightsmile.pk
            </a>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Available 24/7 for Emergencies</h3>
          <button
            onClick={onChatClick}
            className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
          >
            Chat with Our AI Assistant
          </button>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">About Us</h4>
            <p>
              Bright Smile Dental Clinic provides professional dental care with advanced technology.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Hours</h4>
            <p>Monday - Friday: 10 AM - 8 PM</p>
            <p>Saturday: 10 AM - 8 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2024 Bright Smile Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
