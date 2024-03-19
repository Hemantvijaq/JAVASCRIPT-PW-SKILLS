function extractsparts(pattern, dateString) {
    const re = new RegExp(pattern);
    const match = re.exec(dateString);
  
    if (match) {
          const [ Date, month, year] = match;
               
             return {
              match: true,
              Date,
              month,
              year
             };
          } else {
              return{
                  match: false
              };
          }
  }
  
  
  const pattern1 = /(\w{1})-(\w{2})-(\w{4})/; 
  const dateString1 = "2-02-2023";
  
  const result1 = extractsparts(pattern1, dateString1);
  
  console.log("Date String:", dateString1);
  
      console.log( result1.Date);
      console.log( result1.month);
      console.log(result1.year);
 