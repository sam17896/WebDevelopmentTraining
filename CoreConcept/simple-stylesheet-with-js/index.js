const element = document.getElementById('box-1');

element.innerHTML = `<p>Hello World</p>`;
element.style.backgroundColor = "red"


const elements = document.getElementsByClassName('border-1');


for (var i = 0; i < elements.length; i++) {
    const element = elements.item(i);
    element.innerHTML = `<p>Hello World</p>`;
    element.style.backgroundColor = "red";
}

// element.innerHTML = `<p>Hello World</p>`;
// element.style.backgroundColor = "red"

console.log(elements);