const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export const ConvertToPersian = (n: number | string): string => {
  const numWithCommas: string = numberWithCommas(n);
  const persianNumber: string = toPersianNumbers(numWithCommas);
  return persianNumber;
};

function numberWithCommas(x: number | string): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(n: string): string {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}