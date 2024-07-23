const heading = document.querySelector('[learner="Umair"]');
console.log(heading.attributes.learner.value);

console.log(heading.getAttribute('learner'));
document.querySelector('[learner="Umair"]').setAttribute('title','heading is just good thing');