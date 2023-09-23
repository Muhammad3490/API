let apiData;

fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lahore?unitGroup=metric&key=CS6PXJ53G889QVZMACR923WCM&contentType=json')
.then(response=>response.json())
.then(data=>{
    apiData=data;
    console.log(apiData)
})
.catch(error =>{

})
const maxTemp=apiData.address;
console.log(maxTemp)