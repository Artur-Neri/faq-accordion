let itens = document.querySelectorAll('.accordion__item');

itens.forEach(element => {
    element.addEventListener('click', abreItem);
});


function abreItem() {
    const answer = this.children[1]
    answer.classList.toggle('hide');
}