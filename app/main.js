let itens = document.querySelectorAll('.accordion__item');

itens.forEach(element => {
    element.addEventListener('click', abreItem);
});

function abreItem() {
    const answer = this.children[1]
    answer.classList.toggle('hide');

    if (answer.classList.contains('hide')) {
        this.children[0].children[1].src = './assets/images/icon-plus.svg';
    } else {
        this.children[0].children[1].src = './assets/images/icon-minus.svg'
    }
}