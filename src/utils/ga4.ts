import ga4 from 'react-ga4';

const MEASUREMENT_ID = 'G-YND6HF2DQV';
const isProduction = process.env.NODE_ENV === 'production';

export const init = () =>
  ga4.initialize(MEASUREMENT_ID, {
    testMode: !isProduction,
  });

export const sendEvent = (name: string) =>
  ga4.event('event', {
    event_name: name,
  });

export const sendPageview = (path: string) =>
  ga4.send({
    hitType: 'pageview',
    page: path,
  });
