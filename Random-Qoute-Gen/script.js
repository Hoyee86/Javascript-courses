const quoteCon = document.getElementById('qoute-container')


const quoteText = document.getElementById('qoute')


const authorName = document.getElementById('author')

const twitterBtn = document.getElementById('twitter')

const newQuoteBtn  = document.getElementById('new-qoute');

// const newQuoteBtn = document.getElementById('new-quote')



///https://type.fit/api/quotes
let apiQuote = [];


function newQuotes () {
     const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
     console.log(quote)

     if(!quote.author) {
        authorName.textContent = 'unknown'
     }else{
        authorName.textContent = quote.author
     }


     //check quote length to determine the styling

     if(quote.text.length > 50) {
        quoteText.classList.add('long-quote')
     }else{
        quoteText.classList.remove('long-quote')
     }

    
     quoteText.textContent = quote.text
}


async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response =  await fetch(apiUrl)
         apiQuote = await response.json()

        console.log(apiQuote)

        newQuotes ()

    }catch(error) {
        console.log(error)
    }
}


//Event Listeners
 newQuoteBtn .addEventListener('click',  newQuotes );

getQuotes()