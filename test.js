<ul id="listToDestroy">
  <li><a href="#">first item</a></li>
  <li><a href="#">second item</a></li>
  <li><a href="#">third item</a></li>
  <li><a href="#">fourth item</a></li>
  <li><a href="#">fifth item</a></li>
</ul>

// #Destroy all elements inside the UL

// let destroy = document.getElementById(listToDestroy);
// destroy.forEach(el => {
//   el.remove();
// });

document.getElementById('listToDestroy').addEventListener('click', ()=> {
  e.preventDefault();
  let el = e.target.parentNode;
  el.parentNode.removeChild(el);
});

document.getElementById('listToDestroy').addEventListener('click', ()=> {
  e.preventDefault();
  let el = e.target.parentNode;
  el.innerHTML = "";
});

<div id="doubleHolder">
  <button class="double">double</button>
</div>

// #button gets destroyed, 2 additional buttons get created in its place.

document.getElementByClassName("double").addEventListener('click', ()=>{
  e.preventDefault();
  let el = e.target;
  el.remove();
  let overall = getElementbyId('doubleHolder');
  overall.innerHTML = <button>One</button><button>Two</button>
});

document.getElementByClassName("double").addEventListener('click', ()=>{
  if (e.target.classList.contains('double')){
    let btn = document.createElement('button');
    btn.setAttributes('class','double');
    btn.innerHTML = 'double';
  }

  let btn2 = document.createElement('button');
  btn2 = setAttribute('class','double');
  btn2.innerHTML = 'double';

  this.appendChild(btn);
  this.appendChild(btn2);
  this.removeChild(e.target);
});
