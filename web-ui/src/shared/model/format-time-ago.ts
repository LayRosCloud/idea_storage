export function formatTimeAgo(date: Date): string {
  const now = Date.now();
  const diffMs = now - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);
  let result = "";
  if (diffSec < 60) {
    result = `${diffSec} секунд${plural(diffSec, ["а", "ы", ""])}`;
  } else if (diffMin < 60) {
    result = `${diffMin} минут${plural(diffMin, ["а", "ы", ""])}`;
  } else if (diffHour < 24) {
    result = `${diffHour} час${plural(diffHour, ["", "а", "ов"])}`;
  } else if (diffDay < 7) {
    result = `${diffDay} день`;
  } else if (diffWeek < 4) {
    result = `${diffWeek} недел${plural(diffWeek, ["я", "и", "ь"])}`;
  } else if (diffMonth < 12) {
    result = `${diffMonth} месяц${plural(diffMonth, ["", "а", "ев"])}`;
  } else {
    result = `${diffYear} год${plural(diffYear, ["", "а", "ов"])}`;
  }
  result = result + " назад";
  return result;
}

export function plural(n: number, forms: [string, string, string]): string {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return forms[2];
  if (n1 > 1 && n1 < 5) return forms[1];
  if (n1 === 1) return forms[0];
  return forms[2];
}
