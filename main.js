// Initialize Parse
Parse.initialize("TRdDeqihPeScgaczGFDOdzdYl7jukuRS3XRZInOV", "9b8EYxqGXs0SQWsWNiYIDaoCO0vuPlRKsNf0mSLs"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

//Reading your First Data Object from Back4App
async function retrievePerson() {
const query = new Parse.Query("workers");

try {
    const person1 = await query.get("HnV9QBnn8s");
    const name1 = person1.get("name");
    const description1 = person1.get("description");

    const person2 = await query.get("AAq8OjmZdO");
    const name2 = person2.get("name");
    const description2 = person2.get("description");

    const person3 = await query.get("i9H4byQcXC");
    const name3 = person3.get("name");
    const description3 = person3.get("description");

    return {name: {name1, name2, name3}, description: {description1, description2, description3}}
} catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
}
}  



 function sendMail(params){
    

     emailjs.send(`service_dxt4ok8`, `contact_form`, params)
    .then(function(res){
         console.log("success", res.status);
    }) 
 }

// window.onload = function() {
//     console.log("hola")
//     document.getElementById('contact-form')?.addEventListener('submit', function(event) {
//         emailjs.sendForm("service_dxt4ok8","contact_form", this)
//             .then(function() {
//                 console.log('SUCCESS!');
//             }, function(error) {
//                 console.log('FAILED...', error);
//             });
      
//     });
// }