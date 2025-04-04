import { activity } from '../types/activity';

export const parseDescription = (description: string) => {
  return description.split('\n').map((line) => line);
};

interface PressActivity {
  string: string;
  url?: string;
}

export const parseActivity = (activities: activity[]) => {
  const parsedActivity = {
    education: [] as string[],
    press: [] as PressActivity[],
  };

  activities.map((activity) => {
    if (activity.type === '교육/강연')
      parsedActivity.education.push(`${activity.year} ${activity.description}`);
    else if (activity.type === '보도/방송')
      parsedActivity.press.push({
        string: `${activity.year} ${activity.description}`,
        url: activity.url,
      });
  });

  parsedActivity.education.sort((a, b) => {
    const yearA = a.split(' ')[0];
    const yearB = b.split(' ')[0];
    return parseInt(yearB) - parseInt(yearA);
  });

  parsedActivity.press.sort((a, b) => {
    const yearA = a.string.split(' ')[0];
    const yearB = b.string.split(' ')[0];
    return parseInt(yearB) - parseInt(yearA);
  });

  return parsedActivity;
};

export const parseLastTwoNumberOfYear = (date: string) => {
  const year = date.split('.')[0];
  const month = date.split('.')[1];
  const day = date.split('.')[2];
  return `${year.slice(-2)}.${month}.${day}`;
};
