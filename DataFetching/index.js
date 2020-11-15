$(window).ready(function () {
  console.log(document);
  const element = $("#box-1");
  element.html("<p>Hello World</p>");
  element.css("backgroundColor", "red");
  $(".border-1").each(function (index, element) {
    // element == this
    $(element).html("<p>Hello World</p>");
    $(element).css("backgroundColor", "red");
  });
  const div = $(
    '<div style="width: 200px; height:200px; background-color: green"></div>'
  );

  // const div = $("<div></div>")
  //   .width(200)
  //   .height(200)
  //   .css("backgroundColor", "green");
  $(document.body).append(div);

  const button = $("#sample-button");
  button.on("click", function (event) {
    div.css("backgroundColor", "blue");
  });

  // $.ajax({
  //   type: "GET",
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   dataType: "json",
  //   success: function (response) {
  //     console.log(response);
  //   },
  // });

  // const loadingDiv = $("<div></div>")
  //   .width(200)
  //   .height(200)
  //   .text("loading....");

  // $(document.body).append(loadingDiv);
  $.get("https://jsonplaceholder.typicode.com/posts", function (data, status) {
    if (status === "success") {
      // loadingDiv.hide();
      const ul = $("<ul></ul>");

      data.forEach(function (item) {
        const li = $("<li></li>");
        li.text(item.title);
        ul.append(li);
      });

      $(document.body).append(ul);
    }
  });
});
