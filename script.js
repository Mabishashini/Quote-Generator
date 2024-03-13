let quote = document.getElementById("quote")
let author = document.getElementById("author")
let btn = document.getElementById("btn")

const url = "https://api.quotable.io/random";

let getQuote =async () => {
    quote.innerText= "Updating..."
    btn.innerText ="Loading..."
    author.innerText=""
    btn.disabled = true;
    try{

        await fetch(url).then(data => data.json()).then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
            btn.innerText ="Get Quote"
            btn.disabled = false;
        })
    }
    catch(err){
        btn.innerText = "Get Quote";
        quote.innerText = "Something went wrong!!"
    }
}


btn.addEventListener("click", getQuote)