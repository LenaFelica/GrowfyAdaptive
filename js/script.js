"use strict";

document.addEventListener('click', documentClick);

function documentClick(e) {
   const targetItem = e.target;

   if(targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
   }
}


// const arr = [1, undefined, 3, 6, undefined, 5, 2, undefined];
// let filterNum = [];

// for(let i = 0; i<arr.length; i++){
//    if(arr[i] !==undefined){
//       filterNum.push(arr[i])
//    }

// }

// filterNum = arr.filter((item) =>{
//    return item !==undefined;
// });

// console.log(filterNum)
