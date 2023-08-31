import {Item} from '../classes/items.js';
import {El} from '../classes/main.js';

export function out({type, path, data, i}){
  // console.log(i);
  // console.log(`g:${data.group}, v:${data.value}`)

  if(data.output.group === 'Визуальный'){
    if(data.output.value === 'full'){
      switch(type){
        case 'news':{
          path.className = 'list feed';
          path.previousElementSibling.textContent = 'NEWS';
          i.forEach(e => {
            new Item().feed({
              path: path,
              item: e
            })
          })
        }
        break;
        case 'subscribers':{
          path.className = 'list feed';
          path.previousElementSibling.textContent = 'SUBSCRIBERS';
          i.forEach(e => {
            new Item().profile({
              path: path,
              item: e
            })
          })
        }
        break;
        case 'subscriptions':{
          path.className = 'list feed';
          path.previousElementSibling.textContent = 'SUBSCRIPTIONS';
          i.forEach(e => {
            new Item().profile({
              path: path,
              item: e
            })
          })
        }
        break;
        case 'subsite':{
          path.className = 'list feed';
          path.previousElementSibling.textContent = 'PROFILE CARD';
          new Item().profileCard({
            path: path,
            item: i
          })
        }
        break;
      }
    }else
    if(data.output.value === 'textOnly'){
      switch(type){
        case 'news':{
          path.className = 'list feed';
          path.previousElementSibling.textContent = 'NEWS';
          i.forEach(e => {
            new Item().feedText({
              path: path,
              item: e
            });
          })
        }
        break;
      }
    }
  }else
  if(data.output.group === 'Текстовый'){
    if(data.output.value === 'full'){
      switch(type){
        case 'news':{
          path.className = 'list feed';
          path.previousElementSibling.textContent = 'NEWS';
          i.forEach(e => {
            new El().Div({
              path: path,
              text: JSON.stringify(sort(['title', 'id', 'subsite.name', 'author.name'], e), null, 2)
            })
          })
        }
        break;
        case 'subscribers':{
          path.className = 'list feed';
          path.previousElementSibling.textContent = 'SUBSCRIBERS';
          i.forEach(e => {
            new El().Div({
              path: path,
              text: JSON.stringify(sort(['id', 'name'], e), null, 2)
            })
          })
        }
        break;
        case 'subscriptions':{
          path.className = 'list feed';
          path.previousElementSibling.textContent = 'SUBSCRIPTIONS';
          i.forEach(e => {
            new El().Div({
              path: path,
              text: JSON.stringify(sort(['id', 'name'], e), null, 2)
            })
          })
        }
        break;
      }
    }
  }else
  if(data.output.group === 'Консоль'){
    if(data.output.value === 'full'){
      switch(type){
        case 'news':{
          i.forEach(e => {
            console.log(e);
          })
        }
        break;
        case 'subsite':{
          i.forEach(e => {
            console.log(e);
          })
        }
        break;
        case 'subscribers':{
          i.forEach(e => {
            console.log(e);
          })
        }
        break;
        case 'subscriptions':{
          i.forEach(e => {
            console.log(e);
          })
        }
        break;
      }
    }
  }
};

function sort(arr, item){
  const obj = {};
  const yo = (e) => e.split('.').reduce((previous, current) => previous[current], item);
  arr.forEach(e => {
    obj[e] = !e.match('.') ? item[e] : yo(e, item);
  })
  return obj;
}
