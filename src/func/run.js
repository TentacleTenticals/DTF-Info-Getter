// console.log('TEST', import);
import {El} from '../classes/main.js';
const page = document.location.href.replace(/https:\/\/([^/]*)(.*)/, '$2');
const path = 'DTF-Info-Getter';

new El().Div({
  path: document.body,
  cName: 'title',
  text: 'DTF Info getter'
});

new El().Div({
  path: document.body,
  cName: 'navigation',
  func: (n) => {
    [
      {
        text: 'Главная',
        attr: ['name', 'main'],
        onclick: () => {
          document.location.href = `${document.location.origin}${path && '/'+path||''}`;
        }
      },
      {
        text: 'О профиле',
        attr: ['name', 'aboutProfile'],
        onclick: () => {
          document.location.href = `${document.location.origin}${path && '/'+path||''}/aboutProfile/index.html`;
        }
      },
      {
        text: 'Обо мне',
        attr: ['name', 'aboutMe'],
        onclick: () => {
          document.location.href = `${document.location.origin}${path && '/'+path||''}/aboutMe/index.html`;
        }
      },
    ].forEach(e => {
      new El().Button({
        path: n,
        cName: 'tab',
        text: e.text,
        attr: e.attr,
        onclick: e.onclick
      });
    })
  }
});

new El().Div({
  path: document.body,
  cName: 'sTitle',
  text: (() => {
    const url = page.split('/').slice(0, -1).filter(e => e);
    function tab(page){
      document.body.children[1].querySelector(`button[name='${page}']`).disabled = true;
    }
    console.log('PAGE', url);

    switch(true){
      case !url[0]:{
        tab('main');
        return 'Главная';
      }
      case url[0] === 'aboutProfile':{
        tab(url[0]);
        return 'О профиле';
      }
      case url[0] === 'aboutMe':{
        tab(url[0]);
        return 'Обо мне';
      }
    }
  })()
});
