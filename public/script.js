console.log("Js is Loaded");

document.querySelector("#btnLoad").addEventListener('click',()=>{
    getQuote();
});



async function getQuote() {
    const response = await fetch('/Quote');
    const data = await response.json();
    let resQuote = data.content;
    let resAuthor = data.originator.name;
    console.log(resQuote,resAuthor);
    document.querySelector('#QuoteDiv').textContent=resQuote+" - "+resAuthor;

}