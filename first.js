const BASE_URL = 
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(". form select");
const msg = document.querySelector(".msg");
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
    newOption.innertext = currCode;
    newOption.value = currCode;
    if(select.name === "from"   && currCode === "USD")
    {
        newOption.selected = "selected";
    }
    else if(select.name === "to"   && currCode === "PK")
    {
        newOption.selected = "selected";
    }
    select.append(newOption);
}
select.addEventListener("change" , (evt) =>
{
    updateFlag(evt.target);
});

}

const  updateFlag = (element) =>
    {
        let code =element.value;
        let countrycode = countryList[currcode];
        let newsrc =`https://flagsapi.com/${countrycode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newsrc;
    };





    btn.addEventListener("click", async (evt) =>
    {
        evt.preventDefault();
        let amount = document.querySelector(".amount input");
        let amtval = amount.value;
        if(amtval ==="" || amtval <1)
        {
            amtval =1;
            amount.value ="1";
        }
        //console.log(fromcurr, tocurr);
    const URL = `${BASE_URL}/${fromcurr.value.tolowercase()}/${tocurr.value.tolowercase()}.json`;
    let response = await fetch (URL);
    let data = await response.json();
    let rate = data (tocurr.value.tolowercase());
    let finalAmount = amtval * rate;
    msg.innertext =`${amtval} ${fromcurr.value }  ${finalAmount}  ${tocurr.value}`;   
});