const firstHeading = document.querySelector('h1');
firstHeading.style.color="hotpink"; 
firstHeading.style.backgroundColor="blue";

const allAnchorTag = document.querySelectorAll('a')
// allAnchorTag.forEach(function(element,index){
//     element.style.color="teal"
//     element.style.textDecoration="none"
// })


for(const link of allAnchorTag){
//     link.style.color="teal";
//     link.style.textDecoration="none";  
//     link.style.fontWeight="800"
//     link.style.fontFamily="cursive"
//     link.style.fontSize="24px";
// }
//more better solution below

    console.log(link.style.cssText);
}