window.addEventListener("load", function () {
  console.log(document);

  const element = document.getElementById("box-1");

  element.innerHTML = `<p>Hello World</p>`;
  element.style.backgroundColor = "red";

  const elements = document.getElementsByClassName("border-1");

  for (var i = 0; i < elements.length; i++) {
    const element = elements.item(i);
    element.innerHTML = `<p>Hello World</p>`;
    element.style.backgroundColor = "red";
  }

  // element.innerHTML = `<p>Hello World</p>`;
  // element.style.backgroundColor = "red"

  console.log(elements);

  var div = document.createElement("div");
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.backgroundColor = "green";
  document.body.appendChild(div);

  const button = document.getElementById("sample-button");

  button.addEventListener("click", function (event) {
    div.style.backgroundColor = "blue";
  });
});
