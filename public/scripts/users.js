
$(document).ready((list) => {

  $(() => {
    $.ajax({
      method: "GET",
      url: "/users/myList"
    }).done((list) => {

    for (item in list) {
      $("<div class='item-box'>").text(list[item].title).appendTo('.user-box')
      $("<form method='POST' action='/urls/list[item].list_id/delete'><input type='submit' value='Delete'></form>").text('delete').appendTo('.user-box')
    }

    // <form method="POST" action="/urls//delete"><input type="submit" value="Delete"></form>

    $("<button class='update'>").text('update').appendTo('.item-box')
    // $("<button class='delete'>").text('delete').appendTo('.item-box')

    })
  })

  $(".delete").on('click', () => {

  })

})
