const QuoteText = document.querySelector("#quote" );
quoteBtn = document.querySelector("button");
authorName = document.querySelector(".author-div #author")
soundBtn = document.querySelector("#sound-track")
function RandomQuote (){  
fetch("https://api.quotable.io/random")   .then(res => res.json())
.then(result => {
  QuoteText.innerText=result.content;
  authorName.innerText=result.author;
});
} 
soundBtn.addEventListener("click",() => { 
  let Utterance = new SpeechSynthesisUtterance(`${QuoteText.innerText }  by ${authorName.innerText}`);
  speechSynthesis.speak(Utterance);
})
quoteBtn.addEventListener("click", RandomQuote)
