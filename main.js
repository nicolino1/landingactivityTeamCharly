// Initialize Parse
Parse.initialize("TRdDeqihPeScgaczGFDOdzdYl7jukuRS3XRZInOV", "9b8EYxqGXs0SQWsWNiYIDaoCO0vuPlRKsNf0mSLs"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

//Reading your First Data Object from Back4App
async function retrievePerson() {
const query = new Parse.Query("workers");

try {
    const person = await query.get("HnV9QBnn8s");
    const name = person.get("name");
    const description = person.get("description");
    // console.log(document.getElementById('db-name'))
    // document.getElementById('db-name').innerHTML = name;
    // document.getElementById('db-description').innerHTML = description;
    // localStorage.setItem("name", name);
    return {name, description}
} catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
}
}  