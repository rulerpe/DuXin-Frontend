import { useEffect, useState } from 'react';
import { createConsumer, Cable, Subscription } from '@rails/actioncable';
import {
  SummaryTranslationChannelMessage,
  STAGES,
  TranslatedSummaryType,
} from '../types';

const useActionCable = (
  channelName: string,
  params?: Record<string, unknown>,
) => {
  const [currentStage, setCurrentStage] =
    useState<keyof typeof STAGES>('extracting_text');
  const [translatedSummary, setTranslatedSummary] =
    useState<TranslatedSummaryType | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const consumer: Cable = createConsumer(
      `wss://${import.meta.env.VITE_API_URL}/cable`,
    );
    let subscription: Subscription;

    const connectChannel = () => {
      subscription = consumer.subscriptions.create(
        { channel: channelName, ...params },
        {
          received(data: SummaryTranslationChannelMessage) {
            setCurrentStage(data.stage);
            if (data.stage === 'error') {
              setError(true);
            }
            if (
              data.stage === 'summary_translation_completed' &&
              data.translated_json
            ) {
              setTranslatedSummary(data.translated_json);
            }
          },
          connected() {
            console.log('Connected to channel');
          },
          disconnected() {
            console.log('Disconnected from channel');
          },
        },
      );
    };
    connectChannel();

    return () => {
      subscription.unsubscribe();
      consumer.disconnect();
    };
  }, [channelName, params]);
  return { currentStage, translatedSummary, error };
};

export default useActionCable;
