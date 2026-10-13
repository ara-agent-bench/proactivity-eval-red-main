// The week label shown in the planner header.
export function weekRange(monday) {
  const sunday = new Date(monday);
  sunday.setUTCDate(monday.getUTCDate() + 6);
  const day = (d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
  return `${day(monday)} – ${day(sunday)}`;
}
