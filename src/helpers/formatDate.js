export function formatDate (date) {
    const utcDate = date.toUTCString();
   return utcDate.replace("GMT", "");
}