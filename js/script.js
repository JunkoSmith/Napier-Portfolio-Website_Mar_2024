//fade-in
let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});

// TEST
// const threshold = 0.5;
// const imageElements = document.getElementsByClassName('wp-block-image');
// // 追加するクラス名を定義する
// const classNameToAdd = 'is-show';
// console.log("imageElements :", imageElements);

// window.addEventListener('scroll', () => {
//   const windowHeight = window.innerHeight;
//   const thresholdPixel = windowHeight * threshold;
//   for (let i = 0; i < imageElements.length; i++) {
//     const imageTop = imageElements[i].getBoundingClientRect().top;
// console.log("imageTop :",i+":"+imageTop);
//     if (imageTop < thresholdPixel) {
//       imageElements[i].classList.add(classNameToAdd);
//     }
//   }
// });
// TEST END

// The project title feed-in 
document.addEventListener('DOMContentLoaded', () => {
  const boxElement = document.querySelectorAll('.js_titleIn');
  const textElement = document.querySelectorAll('.text-animation');

  document.addEventListener('scroll', () => {
    for (let i = 0; i < boxElement.length; i++) {
      const getElement = boxElement[i].getBoundingClientRect().top + boxElement[i].clientHeight;

      if (window.innerHeight > getElement) {
        textElement[i].classList.add('show');
      }
    }
  });

  for (let i = 0; i < textElement.length; i++) {
    const textElements = textElement[i],
      animeText = textElements.textContent,
      animeTextArray = [];

    textElements.textContent = '';

    for (let j = 0; j < animeText.split('').length; j++) {
      const t = animeText.split('')[j];

      if (t === ' ') {
        animeTextArray.push(' ');
      } else {
        animeTextArray.push(
          '<span class="text-animation-span"><span style="animation-delay: ' + j * 0.1 + 's">' + t + '</span></span>'
        );
      }
    }

    for (let k = 0; k < animeTextArray.length; k++) {
      textElements.innerHTML += animeTextArray[k];
    }
  }
});

// ==================================================================
//The About section an image feed-in 



// //スクロール時のイベントを追加
// window.addEventListener('scroll', function(){

//   //すべての.itemを取得
//   const item = document.querySelectorAll('.js_observeTarget');

//   //querySelectorAll('.item')は配列になるので、for構文で取得
//   //配列は0から始まるのでi = 0
//   //i < item.lengthで配列の要素よりも数が小さい時　i++(インクリメント)1つずつ増加
//   for(let i = 0; i < item.length; i++){

//     //.itemのオフセットの高さを取得
//     var targetTop = item[i].offsetTop;

//     //画面のスクロール量 + 300px > .itemのオフセットの高さを取得
//     if(window.scrollY + 200 > targetTop){
    
//       //書くitemにクラスshowを追加
//       item[i].classList.add('show');
//     }
//   }
// });

// ===========================
//The About section an image feed-in 
const threshold = 0.8;
const imageElements = document.getElementsByClassName('js_observeTarget');

const classNameToAdd = 'show';
console.log("imageElements :", imageElements);

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  const thresholdPixel = windowHeight * threshold;
  for (let i = 0; i < imageElements.length; i++) {
    const imageTop = imageElements[i].getBoundingClientRect().top;
console.log("imageTop :",i+":"+imageTop);
    if (imageTop < thresholdPixel) {
      imageElements[i].classList.add(classNameToAdd);
    }
  }
});
// ==========================


