export interface InterfaceData {
  title: string;
  background: string;
  icon: string;
  timeframes: Timeframes;
}

interface Timeframes {
  daily: Daily;
  weekly: Daily;
  monthly: Daily;
}

interface Daily {
  current: number;
  previous: number;
}
