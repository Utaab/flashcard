const cards = []
document.getElementById("addCard").addEventListener("click", () =>{
    const generatCard = {
        title: document.getElementById("cardTitle").value,
        description: document.getElementById("textareaDescription").value,
    }
    cards.push(generatCard);
    console.log(cards);
    addCardDOMs();
})



const addCardDOMs = (title,description) =>{
    const deleteBTNofCards = document.getElementById("deleteBTN");

    const cardgenerate = document.createElement("div");
    cardgenerate.className = "cradBox";
    cardgenerate.innerHTML = "<div class='contentCard'><div id='titleCardBox'>abc</div><div id='descriptionCardBox'>asfdsfds</div></div><div class='btnsCard'><button class='btn btn-danger' id='deleteBTN'><i class='fas fa-trash-alt'></i></button><button class='btn btn-light' id='editBTN'><i class='fas fa-edit'></i></button></div>";
    document.getElementById("showCards").appendChild(cardgenerate);
    const deleteCard = () =>{
        document.getElementById("showCards").removeChild(cardgenerate);
    }
    deleteBTNofCards.forEach((btn)=>{
        console.log("btn")
        btn.addEventListener("click", () => {
            deleteCard();
        })
    });
}
