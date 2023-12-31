export function formatDate (date) {

    const options = {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Europe/Berlin'
        };
    
     const dateFormat = 
           new Intl.DateTimeFormat('default', options)
           .format(date)
           .replace(/AM|PM/g, "")
           .split(',') 
           .join('.')
     
    return dateFormat;
}