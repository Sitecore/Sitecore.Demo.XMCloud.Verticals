// feature/twilio-analytics-segment
// Twilio Segments CDP Event Tracking
//
import { Analytics } from '@segment/analytics-node';

const analyticsSingleton = () => {
  return new Analytics({ writeKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY as string });
};

// Correctly extend the global object
declare global {
  // Add the analyticsGlobal property to the globalThis interface
  interface Global {
    analyticsGlobal: undefined | ReturnType<typeof analyticsSingleton>;
  }
}

const analytics = globalThis.analyticsGlobal ?? analyticsSingleton();

export default analytics;

if (process.env.NODE_ENV !== 'production') globalThis.analyticsGlobal = analytics;
