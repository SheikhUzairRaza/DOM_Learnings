// // function sayHi(){
// //     document.body.children[5].children[2].children[4].src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bF2mL7adwgqdnkOTMFOOdsvVcUpOPvfcSQ&s";
// // }

// // document.body.children[1].innerHTML='HELLO WORLD'
// const a =  document.body.children[0];

// ///aik se zyada space nahi show krega agr html mein likhdya
// //aur agar pre use kiya tou 
// //pre superset of paragraph confused
// //pre wide spaces reflect krega
// //pre se paragraph ko bhi use kar sakte hai (own)
// //pre itna use nahi karty
// //line break br
// //horizontal line hr
// // del tag for discount dikhany ka tareeqa like old price cut krky new dikhana

// //list creation in html ul,ol,defintion list
// //unordered list creation way
// //ul tag then list create krni jiska order nahi matlab 1,2,3,4,5 A,B,C means no sequence show kuch nahi show hoga usse phly

// //ul aur ol just for items k lye use hota
// //multiples definitons ko list mein dikhana defintion title
// // defintion title ke foran baad definition description hona chahye wrna double times term hee ajyegi

// //const allImages = document.images;
// // const allImages = document.getElementsByTagName('img');
// // const allParagraphs = document.getElementsByTagName('p');
// // console.log(allImages);

// //jo tag na mile [] empty collectin return



// // document.body.children[5].children[2].children[4].s
// // rc="./images/table-task.png"



// // const AllImages = document.getElementsByTagName('img');


// // const image = AllImages[0];

// // console.log(image);



// // const cssImg = document.getElementsByClassName('css-image');
// // console.log(cssImg);


// // const jsImage = document.getElementById('js-image');
// // console.log(jsImage);

// // agar same id di tou phla wala element choose krlega
// //get element means sirf ek hee hoga kyunky id hamesha unique hoti islye ek manty
// //get elements means multiple hoga kyunki class multiple hoti hain


// const cssImage = document.querySelector('.css-image');

// // we can pass anything tag,class name,id just like css selector.


// document.querySelector('#js-image')





// //document.querySelectorAll()  // retutn all element in nodelist 

// //NodeList is better than html collection because it allow some array method



// // console.log(document.querySelectorAll('#css-image')); 


// const jsimg = document.querySelector('.js-image')
// console.log(jsimg);


// //nested select bhi karsakty.




const webImage = document.querySelector('#web-technologies');

const cssImage = document.querySelector('#css-image');

const jsImage = document.querySelector('#js-image');


webImage.src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80";

jsImage.src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg"

cssImage.src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"