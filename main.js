// const floatingBlocks = document.querySelectorAll('.floating-block');
// let position = {
//   posX: 0,
//   posY: 0
// };





// function floating (elem, posX, posY, k) {
//   elem.style.transform = `translate(${posX/k}px, ${posY/k}px)`;
//   // console.log('TEST: ', elem, posX, posY);
// }

// document.addEventListener('mousemove', (event) => {
//   position.posX = event.pageX;
//   position.posY = event.pageY;
//   // console.log("POS:",position);
//   [...floatingBlocks].forEach((item) => {
//     setTimeout(() => {

//     }, 700)
//     floating(item, position.posX, position.posY, 10);
//   });
// });