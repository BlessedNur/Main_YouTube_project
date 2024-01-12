
function erase() {
  if (searching.value === searching.value) {
    searching.value = '';
    xbutton.classList.add('x-button-two')
  }
}


const asideElement = document.querySelector('aside');
const aside2Element = document.querySelector('.aside2')
function change() {

  if (!asideElement.classList.contains('display')) {
    asideElement.classList.add('display');
    if (asideElement.classList.contains('display')) {
      aside2Element.classList.add('display-two');
      return;
    }
    console.log(asideElement);
    return;
  } else {
    asideElement.classList.remove('display');
    if (!asideElement.classList.contains('display')) {
      aside2Element.classList.remove('display-two');
      return;
    }
    console.log(asideElement);

  }


};
let searching = document.querySelector('.search-input')
let xbutton = document.querySelector('.x-button');
function check() {
  if (searching.value === searching.value) {
    xbutton.classList.remove('x-button-two');

  };

  if (searching.value === '') {
    xbutton.classList.add('x-button-two');
  }
  console.log(searching.value);

}
const upload = document.querySelector('.upload');
const cameraOne = document.querySelector('.camera-svg');
const cameraTwo = document.querySelector('.camera-two')
function fillChange() {

  if (!cameraTwo.classList.contains('camera-two-style')) {
    cameraOne.classList.add('camera-fill');
    cameraTwo.classList.remove('camera-two');
    cameraTwo.classList.add('camera-two-style');
    upload.classList.add('upload-two');
    return;

  } else if (cameraTwo.classList.contains('camera-two-style')) {
    upload.classList.remove('upload-two');
    cameraTwo.classList.add('camera-two');
    cameraOne.classList.remove('camera-fill');
    cameraTwo.classList.remove('camera-two-style');
    return;
  };

}

document.querySelector('.show-more')
  .addEventListener('click', () => { removeOverflow(); });

const text = document.querySelector('.show-more');
const overflowShorts = document.querySelector('.overflow-shorts');
function removeOverflow() {
  if (overflowShorts.classList.contains('overflow-shorts')) {
    overflowShorts.classList.remove('overflow-shorts');
    text.innerHTML = `<p>Show less</p>
    <i><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; fill:white; display: block; width: 24px; transform:rotatex(180deg); height: 100%;"><path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path></svg></i>
`;
    return;
  } else if (!overflowShorts.classList.contains('overflow-shorts')) {
    overflowShorts.classList.add('overflow-shorts');
    text.innerHTML = `<p>Show more</p>
    <i><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; fill:white;  display: block; width: 24px; height: 100%;"><path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path></svg></i>
`;

  }

}




const arrowLeft = document.querySelector('.display-arrow-left');
const arrowRight = document.querySelector('.display-arrow-right');
const push = document.querySelector('.push');
let scrolling = document.querySelector('.category-section');

document.querySelector('.arrow-right')
  .addEventListener('click', () => {
    // scrolling.scrollwidth=2087;


    scrolling.scrollLeft += 100;

    if (scrolling.scrollLeft === 600) {
      push.classList.add('displayx');
    }
    if (scrolling.scrollWidth > 20) {
      arrowLeft.classList.remove('display-arrow-left')
    }

  })

if (arrowRight.classList.contains('display-arrow-right')) {
  arrowRight.classList.remove('display-arrow-right')
}


document.querySelector('.arrow-left')
  .addEventListener('click', () => {

    push.classList.remove('display-arrow-right');
    push.classList.remove('displayx')
    scrolling.scrollLeft -= 100;
    if (scrolling.scrollLeft === 8) {
      arrowLeft.classList.add('display-arrow-left');
    }
  })



const categories = document.querySelectorAll('.category-section li');

// if(categories.classList.contains('hover-cat')){
//   categories.addEventListener('mouseover',()=>{categories.classList.remove('hover-cat')})
// }

function removeClasses() {

  categories.forEach(tab => {
    tab.classList.remove('active-cat');
  });
}
categories.forEach(tab => {
  tab.addEventListener('mouseover', () => { tab.classList.remove('hover-cat') });
  tab.addEventListener('click', () => {
    removeClasses();
    tab.classList.add('active-cat');
  })
});



const line = document.querySelector('.linee'),
  videoContainer = document.querySelectorAll('.thumbnail');


let interval;
videoContainer.forEach(video => {


  video.addEventListener('click', () => {

    line.style.width = '100%';
    interval = setInterval(() => {

      if (line.style.width === '100%') {
        line.style.width = '0%'
        line.style.transition = 'none'
      }
      else if (!line.style.width === '100%') {
        line.style.transition = '2s ease-in';

      }
    }, 2100);
  })
})



const items = document.querySelectorAll('.items'),
  itemsSvg = document.querySelectorAll('.items svg');




function removeActive() {
  items.forEach(item => {
    item.classList.remove('active');
  })
}


// function fill() {
//   itemsSvg.forEach(svg => {

//     if (svg.getAttribute('fill') === ('transparent')) {
//       svg.setAttribute('fill', 'white');

//     } else {
//       svg.setAttribute('fill', 'transparent');
//       svg.setAttribute('stroke', '#d8d4d4');

//     }
//   });
// }

items.forEach(item => {
  item.addEventListener('click', () => {
    removeActive();
    item.classList.add('active');
  })

});
