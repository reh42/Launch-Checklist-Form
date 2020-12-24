// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">

*/

//----part 1 adding alerts----
// DONE add validation to notify user if they forgot to enter  a value for any field

// DONE use preventDefault()

// DONE use alert

//make sure user entered valid info for each field 
//ie. value that is converted to correct data type 
//pilot and co-poit names = strings
//DONE fuel level and cargo mass = numbers 



window.addEventListener('load', function(){
const submitForm = document.getElementById("formSubmit");
const pilotName = document.getElementById("pilotName");
const copilotName =document.getElementById("copilotName");
const fuelLevel = document.getElementById("fuelLevel");
const cargoMass = document.getElementById("cargoMass");
const launchStatus = document.getElementById("launchStatus");
const faultyItems = document.getElementById("faultyItems");
const pilotStatus = document.getElementById("pilotStatus");
const copilotStatus = document.getElementById("copilotStatus");
const fuelStatus = document.getElementById("fuelStatus");
const cargoStatus = document.getElementById("cargoStatus");
const launchStatusCheck = document.getElementById("launchStatusCheck");

submitForm.addEventListener('click', function(event){
   pilotStatus.innerHTML = `${pilotName.value} Ready`
   copilotStatus.innerHTML = `${copilotName.value} Ready`
   if (pilotName.value=== "" || copilotName.value === "" || fuelLevel=== "" ||cargoMass.value ==="") {
    alert("Please complete all fields.") 
      event.preventDefault()  
   // } else if (!isNAN(pilotName.value) || !isNAN(copilotName.value) ) {
   //    alert("Please enter only letters in the pilot name and copilot name sections")
   }else if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red"
      faultyItems.style.visibility = "visible"
      cargoStatus.innerHTML = "Too much mass for  shuttle to take off"
      fuelStatus.innerHTML = "Not enough fuel for journey"
      event.preventDefault()  
   }else if (fuelLevel.value < 10000){
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red"
      faultyItems.style.visibility = "visible"
      fuelStatus.innerHTML = "Not enough fuel for journey"
      event.preventDefault()  
   } else if (cargoMass.value > 10000){
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red"
      faultyItems.style.visibility = "visible"
      cargoStatus.innerHTML = "Too much mass for  shuttle to take off"
      event.preventDefault()  
   } else {
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "green"
      event.preventDefault()  
   }
   
   
    
})

//DONE part 2 updating shuttle requirements 

//DONE update list of shuttle requirements
   //updated if not ready
      //DONE low fuel status(less than 10,000 liters), faulty items becomr visable 
         //DONE and statment chamge plus h2 stament change (inner html) 
            //DONE plus color change to red
      //DONEcargo too lg(over 10000 kg)
         //DONElist visable
         //DONEupdate cargo status 
         //DONEupdate launch status 
            //DONEcolor change to read 
   // DONE pilot and co pilot names include with template literals
   // DONE when shuttle is read, 
      //DONE update launch statu
         //DONEcolor to green 
})