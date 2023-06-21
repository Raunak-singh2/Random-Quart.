const buttonEl = document.getElementById("btn");
const quotableEl = document.getElementById("quote");
const autherEl = document.getElementById("auther");
const dateEl = document.getElementById("date");
const url = "https://quotable.io/random";
buttonEl.addEventListener("click", async () => {
 try {
    buttonEl.innerText = "Updating...";
    quotableEl.innerHTML = `<img src="joke.png">`;
  
    const result = await fetch(url);
    const data = await result.json();
    const contenrEl = data.content;
    const authoeEl = data.author;
    const dateAddedEl = data.dateAdded;
    quotableEl.innerText = contenrEl;
    autherEl.innerText = authoeEl;
    dateEl.innerText = dateAddedEl;
    buttonEl.innerText = "GET A JOKE";
 } catch (error) {
    quotableEl.innerText =error;
 }
});
