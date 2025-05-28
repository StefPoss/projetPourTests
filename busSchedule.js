function busSchedule(data) {
   
    
    // Insert your code here
        let result = [];
    
        data.forEach(depart => {
            // console.log(typeof depart)
            const departToDate = new Date(depart)
            
            let departToDateHours = new Date(depart).getHours()
            let departToDateMinutes = new Date(depart).getMinutes()
         
            // console.log(typeof departToDate)
            // console.log(departToDateHours)
            //  console.log(departToDateMinutes)

             
             if (departToDateMinutes < 15){
                // console.log("prochain départ à", departToDateHours,"h15")
                 result.push(`Prochain départ à ${departToDateHours}h15`).toString()
                 
             }
             
            if (departToDateMinutes >= 15 && departToDateMinutes < 30){
                //  console.log("prochain départ à", departToDateHours,"h30")
                 result.push(`Prochain départ à ${departToDateHours}h30`).toString()
                 
             }
            if (departToDateMinutes >= 30 && departToDateMinutes < 45){
                //  console.log("prochain départ à", departToDateHours,"h45")
                 result.push(`Prochain départ à ${departToDateHours}h45`).toString()
                 
             }
            if (departToDateMinutes >= 45){
                //  console.log("prochain départ à", departToDateHours + 1,"h00")

                 result.push(`Prochain départ à ${departToDateHours+1}h00`).toString()
                 
             }   
    })
    console.log(result)
    // return result;

}

const hours = ['2021/11/23 09:05:00', '2021/11/23 09:16:00', '2021/11/23 09:30:00', '2021/11/23 09:52:00'];
console.log(busSchedule(hours));
// Expected: ['Prochain départ à 9h15','Prochain départ à 9h30','Prochain départ à 9h45','Prochain départ à 10h00']
