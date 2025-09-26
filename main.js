
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');

        mobileMenuBtn.addEventListener('click', function() {
            if (navMenu.classList.contains('hidden')) {
                navMenu.classList.remove('hidden');
                navMenu.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-slate-100', 'z-50', 'shadow-lg', 'p-4', 'gap-4');
            } else {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-slate-100', 'z-50', 'shadow-lg', 'p-4', 'gap-4');
            }
        });

        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnMenuBtn && !navMenu.classList.contains('hidden')) {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-slate-100', 'z-50', 'shadow-lg', 'p-4', 'gap-4');
            }
        });

        function adjustTextSizes() {
            const screenWidth = window.innerWidth;
            const links = document.querySelectorAll('a, p, button');
            
        }

        window.addEventListener('resize', adjustTextSizes);
        adjustTextSizes();






// function arrayPlusArray(arr1, arr2) {
//   let sum1 = arr1.reduce((a, b) => a + b, 0);
//   let sum2 = arr2.reduce((a, b) => a + b, 0);
//   return sum1 + sum2;
// }

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));


// 2

// function strCount(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(strCount("hello", "l"));

// 3


// function abujon(ages) {
//   let min = Math.min(...ages);
//   let max = Math.max(...ages);
//   let dive = max - min;
//   return [min, max, dive];
// }

// console.log(abujon([82, 15, 6, 38, 35]));

// 4

// function removeChar(str){
//   return str.slice(1, -1);
// }

// console.log(removeChar("eloquent"));


// 5

// String.prototype.toAlternatingCase = function () {
//   return this.split("")
//              .map(ch => ch === ch.toUpperCase() 
//                        ? ch.toLowerCase() 
//                        : ch.toUpperCase())
//              .join("");
// };

// console.log("hello world".toAlternatingCase());
// console.log("HELLO WORLD".toAlternatingCase());
// console.log("HeLLo WoRLD".toAlternatingCase());
// console.log("12345".toAlternatingCase()); 

// 6

// var summation = function (num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(summation(8));

// 7

// function noSpace(x){
//   return x.replace(/\s/g, "");
// }

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); 


