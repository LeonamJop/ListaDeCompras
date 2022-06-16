import { Card } from "./Card.js";

const modal = document.querySelector('.modalRequisitionContainer');

document.getElementById("addNewCard").addEventListener("click", () => {
  modal.classList.add('active');

  modal.onclick = e => {
    if (e.target.className.indexOf('modalRequisitionContainer') !== -1) {
      modal.classList.remove('active');
      document.querySelector(".productName").value = '';
      document.querySelector(".productQuantity").value = '';
      document.querySelector(".productValue").value = '';
    }
  }
});

document.querySelector("#order").addEventListener("click", () => {
  
  const compra = new Card();

  if(!compra.produto || !compra.quantidade || !compra.preco){
    alert("Preencha todos os dados antes de continuar!")
  }else{

    const cardId = Number(Math.random()*10);

    const newBuy = document.createElement("div");
    newBuy.setAttribute("data-id", cardId);
    newBuy.classList.add("card");

    newBuy.innerHTML = `
      <p>Produto: ${compra.produto}</p>
      <p>Quantidade: ${compra.quantidade}</p>
      <p>Valor da UN: R$ ${compra.preco}</p>
      <p>Valor total: R$ ${compra.total.toFixed(2)}</p>
    `
    adiciona.appendChild(newBuy);

    modal.classList.remove('active');

    const buttonRemoveCard = document.createElement('button');
    const buttonRemoveText = document.createTextNode('Remover');
    buttonRemoveCard.appendChild(buttonRemoveText);
    buttonRemoveCard.setAttribute("data-id", cardId);

    newBuy.appendChild(buttonRemoveCard);

    buttonRemoveCard.addEventListener('click', e => {
      const cardRemoved = document.querySelector(`[data-id="${cardId}" ]`);
      cardRemoved.remove();

    })

    /* Adicionando draggable nos cards */
    newBuy.setAttribute("draggable", "true");

    document.querySelector(".productName").value = null;
    document.querySelector(".productQuantity").value = 0;
    document.querySelector(".productValue").value = 0;
  
    const cards = document.querySelectorAll(".card");
    const dropzones = document.querySelectorAll(".dropzone");
  
    cards.forEach((cards) => {
      cards.addEventListener("dragstart", dragstart);
      cards.addEventListener("drag", drag);
      cards.addEventListener("dragend", dragend);
    });
  
    function dragstart() {
      dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
      this.classList.add("is-dragging");
    }
  
    function drag() {
    }
  
    function dragend() {
      dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
      this.classList.remove("is-dragging");
    }
  
    dropzones.forEach((dropzone) => {
      dropzone.addEventListener("dragenter", dragenter);
      dropzone.addEventListener("dragover", dragover);
      dropzone.addEventListener("dragleave", dragleave);
      dropzone.addEventListener("drop", drop);
    });
  
    function dragenter() {
    }
  
    function dragover() {
      this.classList.add("over");
      const cardBeingDragged = document.querySelector(".is-dragging");
      this.appendChild(cardBeingDragged);
    }
  
    function dragleave() {
      this.classList.remove("over");
    }
  
    function drop() {
      this.classList.remove("over");
    }
  }
});