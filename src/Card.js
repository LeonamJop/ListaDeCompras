export class Card{
    produto = document.querySelector(".productName").value;
    quantidade = document.querySelector(".productQuantity").value;
    preco = document.querySelector(".productValue").value;
    total = this.preco * this.quantidade;
}