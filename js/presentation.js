import React, { Component } from 'react';
import Deck from "./components/Deck.react";
import Slide from "./components/Slide.react";
import Code from "./components/Code.react";

import vkLogo from "../img/vk.svg";
import paperLogo from "../img/paper.svg";

import {} from "../css/theme.css";
import {} from "../css/prism.css";

const TOPIC = 'Ничего ты не знаешь, Джон Сноу. Frontend new.vk.com.';
const SPEAKER = 'Вячеслав Шебанов';

export default class Presentation extends Component {

  render() {
    return (
      <div>
      <Deck>

        <header className="caption">
          <h1>{TOPIC}</h1>
          <p>{SPEAKER}</p>
        </header>

        <Slide className="cover-slide">
          <h2>{TOPIC}</h2>
          <p>{SPEAKER}</p>
        </Slide>

        <Slide>
          <h2>Привет, меня зовут Слава</h2>
          <ul>
            <li className="sparse-item">
              <img className="work-logo" src={vkLogo} /> Разработчик «ВКонтакте»
              (<a href="https://vk.com" target="_blank">vk.com</a>)
            </li>
            <li className="sparse-item">
              <img className="work-logo work-logo_paper" src={paperLogo} /> Сооснователь интернет-газеты «Бумага»
              (<a href="http://paperpaper.ru" target="_blank">paperpaper.ru</a>)
            </li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="shout">Вопросы?</h2>
        </Slide>
      </Deck>
      </div>
    );
  }
}
