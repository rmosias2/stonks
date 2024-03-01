import { format } from 'date-fns';

type Locale = 'ptBR';

export const createDateObject = (date: string) => {
  return new Date(`${date} 00:00`);
};

const formatRecords: Record<
  Locale,
  {
    date: string;
    time: string;
  }
> = {
  ptBR: {
    date: 'dd/MM/yyyy',
    time: 'HH:mm',
  },
};

export const formatDate = (date: Date, locale: Locale) => {
  return format(date, formatRecords[locale].date);
};

export const formatTime = (date: Date, locale: Locale) => {
  return format(date, formatRecords[locale].time);
};
