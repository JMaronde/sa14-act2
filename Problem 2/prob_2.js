const button = document.getElementsByTagName("button")[0]
button.addEventListener("click", async function fetchData(event) {
    event.preventDefault();

    try{
        const api_key = "5ec50574daca3c7faef00c44"
        const from_currency = document.getElementById("from_currency").value;
        const to_currency = document.getElementById("to_currency").value;
        const amount = document.getElementById("amount").value;
        const data = await fetch(`https://v6.exchangerate-api.com/v6/${api_key}/latest/${from_currency}`).then((response) => response.json());
        const result = document.getElementById("result")

        let conversion_rate; // Declare a conversion rate variable

        // Grab the conversion rate data depending on the to_currency that is chosen out of the 3
        if (to_currency === "USD") {
            conversion_rate = data.conversion_rates.USD; 
        } else if (to_currency === "EUR") {
            conversion_rate = data.conversion_rates.EUR;
        } else {
            conversion_rate = data.conversion_rates.EGP;
        }
        
        // Write out the result in the result div 
        result.innerHTML = `
        <p>${amount} ${from_currency} to ${to_currency} = ${amount * conversion_rate} ${to_currency}</p>
        `

    }
    catch(error) {
        console.log("Error fetching data: ", error);
        console.log(error.status);
    }
} )