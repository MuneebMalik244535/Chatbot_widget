import { getClinicData } from '@/data/clinicData';
import { WidgetChatbot } from '@/components/WidgetChatbot';

interface WidgetPageProps {
  searchParams: Promise<{
    clientId?: string;
  }>;
}

export default async function WidgetPage({ searchParams }: WidgetPageProps) {
  const params = await searchParams;
  const clientId = params.clientId || 'dental-clinic-1';
  const clinicData = getClinicData(clientId);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{clinicData.name} - Chat</title>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            height: 100%;
            background: transparent;
            font-family: system-ui, -apple-system, sans-serif;
          }
        `}</style>
      </head>
      <body>
        <WidgetChatbot clinicData={clinicData} clientId={clientId} />
      </body>
    </html>
  );
}
