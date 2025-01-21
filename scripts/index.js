// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(cardTitle, cardImage, removeCard) {
    
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardRemove = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__title').textContent = cardTitle;
    cardElement.querySelector('.card__image').src = cardImage;
    cardElement.querySelector('.card__image').alt = cardTitle;

    cardRemove.addEventListener('click', () => removeCard(cardElement));

    return cardElement;
  }

// @todo: Функция удаления карточки
function deleteCard(removeCard) {
    removeCard.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function(card) {
    placesList.append(addCard(card.name, card.link, deleteCard));
})
