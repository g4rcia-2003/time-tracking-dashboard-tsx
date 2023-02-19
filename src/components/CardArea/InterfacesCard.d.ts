export interface PropsCard {
  date: string;
  title: string;
  icon: string;
  background: string;
  data: DataProps;
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
