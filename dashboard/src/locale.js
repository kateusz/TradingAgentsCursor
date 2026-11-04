export const dateFmt = new Intl.DateTimeFormat("pl-PL", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export const dateTimeFmt = new Intl.DateTimeFormat("pl-PL", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "UTC",
  hourCycle: "h23",
});

export function formatDate(value) {
  if (!value) return "";
  const text = String(value);
  return dateFmt.format(new Date(text.includes("T") ? text : text.replace(" ", "T") + "Z"));
}

export function formatDateTime(value) {
  if (!value) return "Brak migawki";
  return `${dateTimeFmt.format(new Date(value))} UTC`;
}

export function formatAge(value) {
  if (!value) return "";
  const minutes = Math.max(0, Math.round((Date.now() - Date.parse(value)) / 60000));
  if (minutes < 60) return `${minutes} min temu`;
  return `${Math.round(minutes / 60)} godz. temu`;
}

export function formatHorizon(value) {
  if (!value) return "—";
  if (value === "swing") return "swing";
  if (value === "position") return "pozycja";
  return value;
}
