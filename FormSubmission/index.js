$(window).on("load", function () {
  $("#add-post").on("click", function (e) {
    const title = $("#input-title").val();
    const body = $("#input-body").val();

    $.post(
      "https://jsonplaceholder.typicode.com/posts",
      { title, body },
      function (data, success) {
        console.log({ data, success });
      }
    );
  });
});
