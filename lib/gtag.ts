type EventParams = {
    action: any;
    category: any;
    label: any;
    value: any;
  };
  
  export const GA_TRACKING_ID: string = 'G-5EK3HD1D1T';
  
  export const pageview = (url: string): void => {
    if (GA_TRACKING_ID) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    }
  };
  
  export const event = ({ action, category, label, value }: EventParams): void => {
    if (GA_TRACKING_ID) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };
  