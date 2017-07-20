$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((list) => {

    for(item of list) {
      $("<div>").text(item.title).appendTo($("body"));
    }
  });;
});

//Loop through each user and display each unique title
//Each unique is placed in the list(title)
