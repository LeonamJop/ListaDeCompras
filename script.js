import { Card } from "./Card.js";

document.querySelector("#order").addEventListener("click", () => {
    const compra = new Card();

  const newBuy = document.createElement("div");
  // const inputProductNameValue = document.querySelector(".productName").value;
  const productNameP = document.createElement("p");
  const productName = document.createTextNode(`Produto: ${compra.produto}`);
  productNameP.appendChild(productName);

  const productQuantityP = document.createElement("p");
  const productQuantity = document.createTextNode(`Quantidade: ${compra.quantidade}`);
  productQuantityP.appendChild(productQuantity);

  const productValueP = document.createElement("p");
  const productValue = document.createTextNode(`Valor da UN: R$ ${compra.preco}`);
  productValueP.appendChild(productValue);

  const totalPurchaseAmountP = document.createElement("p");
  const totalPurchaseAmount = document.createTextNode(`Valor total: R$ ${compra.total.toFixed(2)}`);
  totalPurchaseAmountP.appendChild(totalPurchaseAmount);


  newBuy.appendChild(productNameP);
  newBuy.appendChild(productQuantityP);
  newBuy.appendChild(productValueP);
  newBuy.appendChild(totalPurchaseAmountP);
  
  newBuy.classList.add("card");
  newBuy.setAttribute("draggable", "true");

  console.log(newBuy);

  adiciona.appendChild(newBuy);

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
    //   console.log('Card: start dragging');
    dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));

    this.classList.add("is-dragging");
  }

  function drag() {
    //   console.log('Card: Is dragging');
  }

  function dragend() {
    //   console.log('Card: Stop drag!');

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
    // console.log('DropZone: Enter in zone!');
  }

  function dragover() {
    //   console.log('DropZone: Is over');

    this.classList.add("over");

    const cardBeingDragged = document.querySelector(".is-dragging");

    this.appendChild(cardBeingDragged);
  }

  function dragleave() {
    //   console.log('DropZone: Leave!');
    this.classList.remove("over");
  }

  function drop() {
    //   console.log('DropZone: Dropped!');
    this.classList.remove("over");
  }
});
