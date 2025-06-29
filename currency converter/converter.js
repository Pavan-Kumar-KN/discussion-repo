// * intializing the api url and token
const key = "6906352654118fb946f1603f"
const base_url = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`

// * load the country list when the page is loaded 
let conversionRates = {};

// 2nd Step: Get the select tag so we can option tag with the script 
const fromSelect = document.getElementById("fromCountry");
const toSelect = document.getElementById("toCountry");

// * load the data
const loadData = async () => {
    const res = await fetch(base_url);
    const data = await res.json();

    // 1st Step: Log the data to the console
    console.log("data = ", data);



    // 3rd Step: Create a function to create option tag
    conversionRates = data.conversion_rates;

    console.log("The fromSelect = ", fromSelect);
    console.log("The toSelect = ", toSelect);


    for (let currency in conversionRates) {
        // create option tag
        let fromoption = new Option(currency, currency);
        let tooption = new Option(currency, currency);

        // another way for creating option tag
        // let altOption = document.createElement("option");
        // altOption.value = currency;
        // altOption.textContent = currency;

        console.log("fromoption = ", fromoption);
        console.log("tooption = ", tooption);
        // console.log("altOption = ", altOption);

        // add this option tag inside select tags
        fromSelect.appendChild(fromoption);
        toSelect.appendChild(tooption);
    }

    // * Default selection options
    fromSelect.value = "USD";
    toSelect.value = "INR";

}

loadData();

// This function is for converting the amount 
const convertCurrency = () => {
    let from = fromSelect.value;
    let to = toSelect.value;
    let amount = parseFloat(document.getElementById("amount").value);

    // get result tag 
    let result = document.getElementById("result");

    // 1st Step: Get the conversion rate based on the country 
    let fromValue = conversionRates[from];
    let toValue = conversionRates[to];


    let convertedAmount = (amount / fromValue) * toValue;

    result.innerHTML = `${amount} ${from} = ${convertedAmount} ${to}`;
}

