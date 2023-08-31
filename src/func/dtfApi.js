export function dtfApi({type, value, v, token}){
  let s;
  switch(type){
    case 'news':{
      s = 'news';
    }
    break;
    case 'subsite':{
      s = 'subsite';
      v = 'id';
    }
    break;
    case 'subscribers':{
      s = 'subsite/subscribers';
      v = 'subsiteId';
    }
    break;
    case 'subscriptions':{
      s = 'subsite/subscriptions';
      v = 'subsiteId';
    }
    break;
    case 'bookmarks':{
      s = 'bookmarks';
    }
  }
  return fetch(`https://api.dtf.ru/v2.31/${s && s+'?'||''}${v||''}${value && '='+value||''}`, {
    headers: {
      'accept': 'application/json',
      ...(token ? {'X-Device-Token':`'${token}'`} : {})
    }
  }).then(r => r.json().then(rr => rr.result));
}
