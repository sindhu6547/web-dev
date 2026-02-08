const amount=document.getElementById("amount")
const fromCurrency=document.getElementById("fromCurrency")
const toCurrency=document.getElementById("toCurrency")
const result=document.getElementById("result")

const apiLink=`https://api.exchangerate-api.com/v4/latest/USD`

async function loadCurrencies() {
    const response=await fetch(apiLink)
    const data=await response.json()

    const currencies=Object.keys(data.rates)

    currencies.forEach(currency=>{
        const option1=document.createElement("option")
        option1.value=currency
        option1.textContent=currency
        fromCurrency.appendChild(option1)

        const option2=document.createElement("option")
        option2.value=currency
        option2.textContent=currency
        toCurrency.appendChild(option2)
    })
    fromCurrency.value="USD"
    toCurrency.value="INR"
}
loadCurrencies()

async function convertCurrency(){
    const amountValue=amount.value

    if(!amountValue || amountValue<=0){
        result.textContent="please enter a valid amount"
        return
    }
    const from=fromCurrency.value
    const to=toCurrency.value
    const response=await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
  const data = await response.json()
  const rate=data.rates[to]
  const convertedAmount=(amountValue*rate).toFixed(2)

  result.textContent=`${amountValue} ${from} = ${convertedAmount} ${to}`


}