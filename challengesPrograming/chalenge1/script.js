const tempTyped = document.querySelector("#temp-typed");
const selectTemp = document.getElementById("select-temp");
const displayTempTyped = document.getElementById("display-temp-typed");
const displayTempConversion = document.getElementById("display-temp-conversion");

selectTemp.addEventListener("change", () => {
    const tempInt = Number(tempTyped.value) || 0;
    displayTempTyped.textContent = `Temp typed: ${tempInt}ºC`;

    switch(selectTemp.value){
        case "celsius": 
            displayTempConversion.textContent = `Temp Conversion: ${tempInt || 0}ºC`;
        break;
        case "fahrenheit":
            const conversionCalculationF =  (9 / 5 * tempInt) + 32;

            displayTempConversion.textContent = `Temp conversion: ${conversionCalculationF}ºF`;
        break;
        case "kelvin":
            const conversionCalculationK = tempInt + 273.15;
            displayTempConversion.textContent = `Temp conversion: ${conversionCalculationK}ºK`;
        break;
        default:
            displayTempTyped.textContent = `Temp typed: ${tempInt}ºC`;
            displayTempConversion.textContent = "";
    }
});

