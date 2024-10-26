const array=[];
const cardContainer=document.getElementById('card-container')
document.addEventListener('DOMContentLoaded',async()=>{
    try {
        const response=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr');
        const data=await response.json();
        array.push(...data)
        console.log(data);
        for(let i=0;i<array.length;i++){
            cardContainer.innerHTML+=`<div class="card">
            <div class="image">
                <img src=${array[i].image} alt="img" class="image-img">
            </div>
            <div class="details">
                <div class="row">
                    <span class="name">${array[i].name}</span>
                    <span class="price">${array[i].current_price}</span>
                </div>
                <div class="row">
                    <span class="short">${array[i].symbol}</span>
                    <span class="change">${array[i].market_cap_change_percentage_24h}</span>
                </div>
            </div>
        </div>`

        }

        
    } catch (error) {
        console.log(error);
        
    }

})
