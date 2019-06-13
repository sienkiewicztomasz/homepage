console.log('siema');
const name ='Tomek';
const age = 43;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lata`);

console.log(`Witaj przybyszu`);

const paragraph = document.querySelector('.paragraph__js');

paragraph.innerHTML = `Nazywam się ${name} i mam ${age} lata`;