
$(document).ready((list) => {

  $(() => {
    $.ajax({
      method: "GET",
      url: "/users/username"
    }).done((user) => {

      for (column of user) {
        $("<span>").text(user[column]).appendTo('.user-box')
      }

    })
  })

  $(() => {
    $.ajax({
      method: "GET",
      url: "/users/myList"
    }).done((list) => {


      for (item in list) {
        $("<div class='item-box'>").text(list[item].title).appendTo('.user-box')

        $("<form method='POST'>")
          .attr('action', `users/${list[item].list_id}/update`)
          .append("<button type='submit'>Update</button>")
          .appendTo('.user-box')

        $("<form method='POST'>")
          .attr('action', `users/${list[item].list_id}/delete`)
          .append("<button type='submit'>Delete</button>")
          .appendTo('.user-box')
      }

    })
  })
})
