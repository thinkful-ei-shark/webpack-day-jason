import shoppingList from './shopping-list';
import $ from 'jquery';
import css from '../styles/index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
