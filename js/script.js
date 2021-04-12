let counter = 3;
let parent = document.querySelector('.wrapper');
let items = document.querySelectorAll('.item')
var html;

document.querySelector('.nxt').addEventListener("click", ()=>{
  if (counter === 3) {
    counter = 2;
    document.getElementById('item2').classList.add('active');
    document.getElementById('item3').classList.remove('active');
    html = document.getElementById('item3').cloneNode(true);
    parent.prepend(html);
    anime({
      targets: html,
      width: ['0','25%'],
      delay: 0,
      easing: 'linear',
      duration: 500
    });
  } else if (counter === 2) {
    counter = 1;
    document.getElementById('item1').classList.add('active');
    document.getElementById('item2').classList.remove('active');
    html = document.getElementById('item2').cloneNode(true);
    parent.prepend(html);
    anime({
      targets: html,
      width: ['0','25%'],
      delay: 0,
      easing: 'linear',
      duration: 500
    });
  } else if (counter === 1) {
    counter = 3;
    document.getElementById('item3').classList.add('active');
    document.getElementById('item1').classList.remove('active');
    html = document.getElementById('item1').cloneNode(true);
    parent.prepend(html);
    anime({
      targets: html,
      width: ['0','25%'],
      delay: 0,
      easing: 'linear',
      duration: 500
    });
  }

  anime({
    targets: document.querySelector('.active'),
    width: ['25%','50%'],
    delay: 0,
    easing: 'linear',
    duration: 500
  });
  let select = parent.lastElementChild;
  anime({
    targets: select,
    width: "0",
    delay: 0,
    easing: 'linear',
    duration: 500
  });
  setTimeout(function(){ select.parentNode.removeChild(select); }, 600);
});

document.querySelector('.prv').addEventListener("click", ()=>{
  if (counter === 3) {
    counter = 1;
    html = document.getElementById('item1').cloneNode(true);
    parent.appendChild(html);
    parent.lastElementChild.classList.add('active');
    document.getElementById('item3').classList.remove('active');
    anime({
      targets: document.getElementById('item3'),
      width: '25%',
      delay: 0,
      easing: 'linear',
      duration: 500
    });
  } else if (counter === 1) {
    counter = 2;
    html = document.getElementById('item2').cloneNode(true);
    parent.appendChild(html);
    parent.lastElementChild.classList.add('active');
    document.getElementById('item1').classList.remove('active');
    anime({
      targets: document.getElementById('item1'),
      width: '25%',
      delay: 0,
      easing: 'linear',
      duration: 500
    });
  } else if (counter === 2) {
    counter = 3;
    html = document.getElementById('item3').cloneNode(true);
    parent.appendChild(html);
    parent.lastElementChild.classList.add('active');
    document.getElementById('item2').classList.remove('active');
    anime({
      targets: document.getElementById('item2'),
      width: '25%',
      delay: 0,
      easing: 'linear',
      duration: 500
    });
  }

  anime({
    targets: document.querySelector('.active'),
    width: ['25%','50%'],
    delay: 0,
    easing: 'linear',
    duration: 500
  });
  let select = parent.firstElementChild;
  anime({
    targets: select,
    width: "0",
    delay: 0,
    easing: 'linear',
    duration: 500
  });
  setTimeout(function(){ select.parentNode.removeChild(select); }, 600);
});
