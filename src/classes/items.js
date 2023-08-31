import {El} from '../classes/main.js';
import {attachment} from '../func/attach.js';

export class Item{
  getTime(d){
    let t = new Date(d);
    return `${t.getFullYear()}/${t.getMonth()+1 < 10 ? `0${t.getMonth()+1}` : t.getMonth()+1}/${t.getDate() < 10 ? `0${t.getDate()}` : t.getDate()} ${t.getHours() < 10 ? `0${t.getHours()}` : t.getHours()}:${t.getMinutes() < 10 ? `0${t.getMinutes()}` : t.getMinutes()}:${t.getSeconds() < 10 ? `0${t.getSeconds()}` : t.getSeconds()}`
  };
  feed({path, item}){
    // console.log('ITEM', item)
    new El().Div({
      path: path,
      cName: 'feed',
      func: (m) => {
        new El().Div({
          path: m,
          cName: 'header',
          onclick: () => {
            window.open(`https://dtf.ru/${item.id}`, '_blank');
          },
          func: (h) => {
            const subsite=new El().Div({
              path: h,
              cName: 'subsite',
              rtn: true
            });
            attachment({
              path: subsite,
              type: 'avatar',
              i: item.subsite.avatar
            })
            new El().Div({
              path: subsite,
              text: item.subsite.name
            })
            const author=new El().Div({
              path: h,
              cName: 'author',
              rtn: true
            });
            attachment({
              path: author,
              type: 'avatar',
              i: item.author.avatar
            })
            new El().Div({
              path: author,
              text: item.author.name
            })
            new El().Div({
              path: h,
              text: this.getTime(item.date * 1000)
            })
          }
        });
        if(item.title) new El().Div({
          path: m,
          cName: 'title',
          text: item.title
        });

        const att=new El().Div({
          path: m,
          cName: 'attachments',
          rtn: true
        })

        for(let i = 0, arr = item.blocks, len = arr.length <= 3 ? arr.length : 3; i < len; i++){
          console.log(arr[i])
          if(arr[i].type === 'media'){
            arr[i].data.items.forEach(e => {
              if(e.image) attachment({
                path: att,
                type: 'image',
                i: e.image
              })
            })
          }
        }
      }
    })
  }
  feedText({path, item}){
    new El().Div({
      path: path,
      cName: 'feed',
      func: (m) => {
        new El().Div({
          path: m,
          cName: 'header',
          onclick: () => {
            window.open(`https://dtf.ru/${item.id}`, '_blank');
          },
          func: (h) => {
            new El().Div({
              path: h,
              text: item.subsite.name
            })
            new El().Div({
              path: h,
              text: item.author.name
            })
            new El().Div({
              path: h,
              text: this.getTime(item.date * 1000)
            })
          }
        });
        if(item.title) new El().Div({
          path: m,
          cName: 'title',
          text: item.title
        });
      }
    });
  }
  profile({path, item}){
    new El().Div({
      path: path,
      cName: 'profile',
      func: (m) => {
        new El().Div({
          path: m,
          cName: 'header',
          func: (h) => {
            const author=new El().Div({
              path: h,
              cName: 'subsite',
              rtn: true
            });
            attachment({
              path: author,
              type: 'avatar',
              i: item.avatar
            })
            new El().Div({
              path: author,
              text: item.name
            })
          }
        });
        new El().Button({
          path: m,
          cName: 'link',
          text: `🔗\uFE0E`,
          onclick: () => {
            window.open(`https://dtf.ru/u/${item.id}`, '_blank').focus();
          }
        })
      }
    })
  }
  profileText({path, item}){
    new El().Div({
      path: path,
      cName: 'profile',
      func: (m) => {
        new El().Div({
          path: m,
          cName: 'header',
          func: (h) => {
            new El().Div({
              path: h,
              text: item.name
            })
          }
        });
        new El().Button({
          path: m,
          cName: 'link',
          text: `🔗\uFE0E`,
          onclick: () => {
            window.open(`https://dtf.ru/u/${item.id}`, '_blank').focus();
          }
        })
      }
    })
  }
  profileCard({path, item}){
    new El().Div({
      path: path,
      cName: 'profileCard',
      func: (m) => {
        attachment({
          path: m,
          type: 'cover',
          i: item.subsite.cover
        });
        new El().Div({
          path: m,
          cName: 'header',
          text: 'PROFILE'
        });
        new El().Div({
          path: m,
          cName: 'list',
          func: (l) => {
            attachment({
              path: l,
              type: 'avatar',
              i: item.subsite.avatar
            });

            new El().List({
              path: l,
              cName: 'itemsList',
              items: [
                {
                  text: `🏷️ ${item.subsite.name}`,
                  title: 'Имя'
                },
                {
                  text: `📅 ${this.getTime(item.subsite.created * 1000)}`,
                  title: 'Создан'
                },
                {
                  text: `📊 ${item.subsite.rating}`,
                  title: 'Рейтинг',
                  cName: item.subsite.rating > 0 ? 'positive' : 'negative'
                },
                {
                  text: `📔 ${item.subsite.description}`,
                  title: 'Описание',
                  cName: 'texter scrollMid'
                },
                {
                  text: '🔗\uFE0E',
                  btn: [
                    {
                      text: 'Профиль',
                      onclick: () => {
                        window.open(item.subsite.url, '_blank');
                      }
                    },
                    item.subsite.avatar && {
                      text: 'Аватар',
                      onclick: () => {
                        window.open(`https://leonardo.osnova.io/${item.subsite.avatar.data.uuid}`, '_blank');
                      }
                    },
                    item.subsite.cover && {
                      text: 'Cover',
                      onclick: () => {
                        window.open(`https://leonardo.osnova.io/${item.subsite.cover.data.uuid}`, '_blank');
                      }
                    }
                  ]
                }
              ]
            });

            new El().List({
              path: m,
              cName: 'itemsList hor',
              items: [
                {
                  title: item.subsite.isOnline ? 'Онлайн' : 'Оффлайн',
                  cName: !item.subsite.isOnline && 'off',
                  text: '📶\uFE0E'
                },
                {
                  title: item.subsite.isPlus && 'Плюс',
                  cName: !item.subsite.isPlus && 'off',
                  text: '➕\uFE0E'
                },
                {
                  title: item.subsite.isPro && 'Про',
                  cName: !item.subsite.isPro && 'off',
                  text: '💼\uFE0E'
                },
                {
                  title: item.subsite.isVerified && 'Подтверждён',
                  cName: !item.subsite.isVerified && 'off',
                  text: '✔️\uFE0E'
                }
              ]
            });

            new El().List({
              path: m,
              cName: 'itemsList',
              items: [
                {
                  title: 'Комментариев',
                  text: `📜\uFE0E ${item.subsite.counters.comments}`
                },
                {
                  title: 'Статей',
                  text: `📰\uFE0E ${item.subsite.counters.entries}`
                },
                {
                  title: 'Подписчиков',
                  text: `🔭\uFE0E ${item.subsite.counters.subscribers}`
                },
                {
                  title: 'Подписок',
                  text: `📬\uFE0E ${item.subsite.counters.subscriptions}`
                }
              ]
            })
          }
        });
      }
    });
  }
}
