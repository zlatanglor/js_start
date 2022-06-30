'use strict';

(function () {

  const data = JSON.parse(localStorage.getItem('#form'));

  if (!data) {
    alert('Вы не заполнили форму');
    return
  }

  const ul = document.createElement('ul');

  for (const key in data) {

    if (data[key]){
      let li = document.createElement('li');
      li.innerHTML = `${key} : ${data[key]}`;
      ul.append(li);
    }
  }

  document.body.prepend(ul);

})();