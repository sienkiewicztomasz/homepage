console.log('siema');
const name ='Tomek';
const age = 43;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lata`);

console.log(`Witaj przybyszu`);

const paragraph = document.querySelector('.paragraph__js');

const welcome = (age,name) => {
    console.log('Witaj ' + name +'!!! Masz ' + age + ' lat:)');
}

console.log(welcome(43, 'Tomek'));

paragraph.innerHTML = `Nazywam się ${name} i mam ${age} lata`;