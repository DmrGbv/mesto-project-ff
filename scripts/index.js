// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(card, removeCard) {
    
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardRemove = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__title').textContent = card.name;

    const cardImg = cardElement.querySelector('.card__image');
    cardImg.src = card.link;
    cardImg.alt = card.name;

    cardRemove.addEventListener('click', () => removeCard(cardElement));

    return cardElement;
  }

// @todo: Функция удаления карточки
function deleteCard(removeCard) {
    removeCard.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function(card) {
    cardsContainer.append(createCard(card, deleteCard));
})
