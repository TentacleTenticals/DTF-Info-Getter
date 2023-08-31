import {El} from './src/classes/main.js';
import {out} from './src/func/output';
import {dtfApi} from './src/func/dtfApi';

new El().Form({
  path: document.body,
  cName: 'form',
  func: (m) => {
    new El().Select({
      path: m,
      label: 'Тип выдачи информации',
      lName: 'flex',
      name: 'typeOfData',
      func: (s) => {
        new El().OptGroup({
          path: s,
          label: 'Визуальный',
          options: [
            ['Полный', 'full'],
            ['Только текст', 'textOnly']
          ]
        });
        new El().OptGroup({
          path: s,
          label: 'Текстовый',
          options: [
            ['Полный', 'full'],
            ['Строчки', 'string'],
            ['Объекты', 'object']
          ]
        });
        new El().OptGroup({
          path: s,
          label: 'Консоль',
          options: [
            ['Полный', 'full'],
            ['Только текст', 'textOnly']
          ]
        });
      }
    });

    new El().Input({
      path: m,
      type: 'submit',
      value: 'НОВОСТИ',
      onclick: () => {
        const data = {
          // id: main.children[0].children[0].value,
          output: {
            value: m.children[0].children[0].value,
            group: m.children[0].children[0].querySelector(`option:checked`).parentElement.label
          }
        };

        const path = document.body.children[4].children[1];
        if(path.children.length > 0) path.replaceChildren();

        dtfApi({
          type: 'news'
        }).then(res => {
          console.log(res);
          out({
            path: path,
            type: 'news',
            data: data,
            i: res.news
          })
        })

        // out({
        //   path: ocument.body.children[0].children[1],
        //   type: 'news',
        //   data: data,
        //   i: e
        // })
      }
    })
  }
});

new El().Div({
  path: document.body,
  cName: 'output',
  func: (m) => {
    new El().Div({
      path: m,
      cName: 'header'
    });
    new El().Div({
      path: m
    });
  }
});
