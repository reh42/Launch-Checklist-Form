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

//DONE make sure user entered valid info for each field 
//ie. value that is converted to correct data type 
// DONEpilot and co-poit names = strings----letters! 
//DONE fuel level and cargo mass = numbers 
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

// part 3



window.addEventListener('load', function(){
const submitButton = document.getElementById("formSubmit");

const faultyItems = document.getElementById("faultyItems");
const pilotStatus = document.getElementById("pilotStatus");
const copilotStatus = document.getElementById("copilotStatus");
const fuelStatus = document.getElementById("fuelStatus");
const cargoStatus = document.getElementById("cargoStatus");
const launchStatusCheck = document.getElementById("launchStatusCheck");
const submitForm = document.getElementById("launchForm")


submitButton.addEventListener('click', function(event){
  event.preventDefault(); 
   const pilotName = document.querySelector("input[name=pilotName]");
   const copilotName =document.querySelector("input[name=copilotName]");
   const fuelLevel = document.querySelector("input[name=fuelLevel]");
   const cargoMass = document.querySelector("input[name=cargoMass]");
   const launchStatus = document.getElementById("launchStatus");
   pilotStatus.innerHTML = `${pilotName.value} Ready`
   copilotStatus.innerHTML = `${copilotName.value} Ready`
   //regular expressions 
   //^ start at the begining
   //+$ check through untill the end
   let letters = /^[A-Za-z]+$/;
   if (pilotName.value=== "" || copilotName.value === "" || fuelLevel=== "" ||cargoMass.value ==="") {
    alert("Please complete all fields.") 
    
   } else if (!pilotName.value.match(letters) || !copilotName.value.match(letters) ) {
       alert("Please enter only letters in the pilot name and copilot name sections") 
       
   }else if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red"
      faultyItems.style.visibility = "visible"
      cargoStatus.innerHTML = "Too much mass for  shuttle to take off"
      fuelStatus.innerHTML = "Not enough fuel for journey"
         
   }else if (fuelLevel.value < 10000){
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red"
      faultyItems.style.visibility = "visible"
      fuelStatus.innerHTML = "Not enough fuel for journey"
      
   } else if (cargoMass.value > 10000){
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red"
      faultyItems.style.visibility = "visible"
      cargoStatus.innerHTML = "Too much mass for  shuttle to take off"
      
   } else {
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "green"
      
   }
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(responce) {
   responce.json().then(function(json){
      const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML += 
         `<div>
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[4].name}</li>
               <li>Diameter: ${json[4].diameter}</li>
               <li>Star: ${json[4].star}</li>
               <li>Distance from Earth: ${json[4].distance}</li>
               <li>Number of Moons: ${json[4].moons}</li>
            </ol>
            <img src="${json[4].image}" id="missionTarget img"/>
         </div>`
            
         ;
   });
});

});