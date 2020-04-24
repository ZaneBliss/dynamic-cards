const cardContainer = document.querySelector(".cards");

let counter = 0;

const generateEl = element => {
    el = document.createElement(`${element}`)
    return el
}
function setAttribute (element, attribute, text) {
    element.setAttribute(`${attribute}`, `${text}`)
}

function btnFactory () {
    // Incrementing counter for however many cards there are
    counter++

    // Generating article elements
    article = generateEl("article");
    setAttribute(article, "class", "card");
    setAttribute(article, "id", `card--${counter}`);
    
    // Generating div elements
    div = generateEl("div");
    setAttribute(div, "class", "text")
    div.innerHTML = document.getElementById("textField").value

    // Generating button div container
    btnDiv = generateEl("div")
   
    // Generating button within div container
    btn = generateEl("button")
    setAttribute(btn, "id", `delete--${counter}`)
    btn.innerHTML = "Delete This Card"

    cardContainer.appendChild(article)
    article.appendChild(div)
    article.appendChild(btnDiv)
    btnDiv.appendChild(btn)
}

function remove (cardNum) {
    cardContainer.querySelector(`#card--${cardNum}`).remove()
}

document.querySelector("#btn").addEventListener("click", () => {
    btnFactory()
    document.getElementById("textField").value = "";
})
document.querySelector("body").addEventListener("click", element => {
    element = element.target.id.split("--")
    if (element[0] === "delete") {
        remove(element[1])
    }
})

