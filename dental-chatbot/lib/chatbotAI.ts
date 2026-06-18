import { clinicData } from '@/data/clinicData';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Rule-based AI response generator
export const generateBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase().trim();

  // Services inquiries
  if (
    message.includes('service') ||
    message.includes('treatment') ||
    message.includes('what do you offer') ||
    message.includes('available service')
  ) {
    const servicesList = clinicData.services
      .map((service) => `• ${service.name}: ${service.description}`)
      .join('\n');
    return `We offer the following services:\n\n${servicesList}\n\nWould you like to know more about any specific service?`;
  }

  // Specific services
  if (
    message.includes('cleaning') ||
    message.includes('clean')
  ) {
    const service = clinicData.services.find((s) => s.id === 'cleaning');
    if (service) {
      return `**${service.name}**\n\n${service.description}\n\n📍 Price: ${service.price}\n⏱️ Duration: ${service.duration}\n\nWould you like to book an appointment?`;
    }
  }

  if (message.includes('brace') || message.includes('orthodontic')) {
    const service = clinicData.services.find((s) => s.id === 'braces');
    if (service) {
      return `**${service.name}**\n\n${service.description}\n\n📍 Price: ${service.price}\n⏱️ Duration: ${service.duration}\n\nWould you like to schedule a consultation?`;
    }
  }

  if (message.includes('whitening') || message.includes('whiten')) {
    const service = clinicData.services.find((s) => s.id === 'whitening');
    if (service) {
      return `**${service.name}**\n\n${service.description}\n\n📍 Price: ${service.price}\n⏱️ Duration: ${service.duration}\n\nWould you like to book an appointment?`;
    }
  }

  if (message.includes('root canal')) {
    const service = clinicData.services.find((s) => s.id === 'root-canal');
    if (service) {
      return `**${service.name}**\n\n${service.description}\n\n📍 Price: ${service.price}\n⏱️ Duration: ${service.duration}\n\nThis is an important procedure. Would you like to book an appointment?`;
    }
  }

  if (message.includes('implant')) {
    const service = clinicData.services.find((s) => s.id === 'implants');
    if (service) {
      return `**${service.name}**\n\n${service.description}\n\n📍 Price: ${service.price}\n⏱️ Duration: ${service.duration}\n\nWould you like to schedule a consultation?`;
    }
  }

  if (message.includes('extract') || message.includes('extraction')) {
    const service = clinicData.services.find((s) => s.id === 'extraction');
    if (service) {
      return `**${service.name}**\n\n${service.description}\n\n📍 Price: ${service.price}\n⏱️ Duration: ${service.duration}\n\nWould you like to book an appointment?`;
    }
  }

  // Pricing inquiries
  if (message.includes('price') || message.includes('cost') || message.includes('charge')) {
    const priceList = clinicData.services
      .map((service) => `• ${service.name}: ${service.price}`)
      .join('\n');
    return `Here are our service prices:\n\n${priceList}\n\n*Prices may vary based on complexity. Please contact us for exact quotes.*`;
  }

  // Timing/Hours inquiries
  if (
    message.includes('hour') ||
    message.includes('time') ||
    message.includes('open') ||
    message.includes('timing') ||
    message.includes('when are you')
  ) {
    return `📍 **Clinic Hours**\n\n${clinicData.hours.weekdays}\n${clinicData.hours.weekend}\n\n🆘 **Emergency**: ${clinicData.emergency}`;
  }

  // Location inquiries
  if (message.includes('location') || message.includes('where')) {
    return `📍 **Our Location**\n\n${clinicData.location}\n\n📞 Phone: ${clinicData.phone}\n💬 WhatsApp: ${clinicData.whatsapp}\n📧 Email: ${clinicData.email}`;
  }

  // Appointment inquiries
  if (
    message.includes('appointment') ||
    message.includes('book') ||
    message.includes('schedule') ||
    message.includes('reserve')
  ) {
    return `📅 **Book an Appointment**\n\nYou can easily book an appointment by:\n\n1️⃣ **WhatsApp**: ${clinicData.whatsapp}\n2️⃣ **Call**: ${clinicData.phone}\n3️⃣ **Email**: ${clinicData.email}\n\nWe're available ${clinicData.hours.weekdays}`;
  }

  // Doctor inquiries
  if (message.includes('doctor') || message.includes('dentist')) {
    const doctorsList = clinicData.doctors
      .map(
        (doc) =>
          `👨‍⚕️ **${doc.name}**\n${doc.title}\nExperience: ${doc.experience}\nSpecialization: ${doc.specialization}`
      )
      .join('\n\n');
    return `Our experienced team:\n\n${doctorsList}`;
  }

  // About clinic inquiries
  if (
    message.includes('about') ||
    message.includes('tell me about') ||
    message.includes('clinic')
  ) {
    return `👋 Welcome to ${clinicData.name}!\n\n${clinicData.description}\n\n🏥 **${clinicData.tagline}**\n\n📍 Location: ${clinicData.location}\n📞 Phone: ${clinicData.phone}\n\nWould you like to know about our services?`;
  }

  // Emergency inquiries
  if (message.includes('emergency')) {
    return `🆘 **Emergency Dental Care**\n\n${clinicData.emergency}\n\nWe're always ready to help!`;
  }

  // Greeting responses
  if (
    message.includes('hello') ||
    message.includes('hi') ||
    message.includes('hey') ||
    message.includes('greetings')
  ) {
    return `👋 Hello! Welcome to ${clinicData.name}. I'm your AI assistant.\n\nHow can I help you today? You can ask me about:\n✓ Services\n✓ Pricing\n✓ Clinic hours\n✓ Booking appointments\n✓ Our doctors\n✓ Location`;
  }

  // Thank you responses
  if (
    message.includes('thank') ||
    message.includes('thanks') ||
    message.includes('thankyou')
  ) {
    return `You're welcome! 😊\n\nIs there anything else I can help you with?`;
  }

  // Fallback response for unknown queries
  return `I'm not sure about that. 🤔\n\nPlease contact our clinic directly for more details:\n📞 Phone: ${clinicData.phone}\n💬 WhatsApp: ${clinicData.whatsapp}\n📧 Email: ${clinicData.email}\n\nI can help with information about services, pricing, hours, and appointments!`;
};

// Simulate API delay for more realistic chat experience
export const simulateBotResponse = async (
  userMessage: string
): Promise<string> => {
  // Simulate network delay (500-1000ms)
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 500 + 500)
  );
  return generateBotResponse(userMessage);
};
