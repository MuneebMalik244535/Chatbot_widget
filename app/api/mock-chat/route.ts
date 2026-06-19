import { getClinicData } from '@/data/clinicData';
import { generateBotResponse } from '@/lib/chatbotAI';

export async function POST(request: Request) {
  try {
    const { message, clientId = 'dental-clinic-1' } = await request.json();

    if (!message || typeof message !== 'string') {
      return Response.json(
        { error: 'Invalid message' },
        { status: 400 }
      );
    }

    // Get clinic data based on clientId
    const clinicData = getClinicData(clientId);

    // Generate bot response using clinic-specific data
    const response = generateBotResponse(message);

    // Simulate network delay
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 500 + 500)
    );

    return Response.json({
      success: true,
      message: response,
      clientId,
      clinicName: clinicData.name,
    });
  } catch (error) {
    console.error('Mock chat error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
