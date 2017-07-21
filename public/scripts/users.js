
$(document).ready((list) => {

  // $(() => {
  //   $.ajax({
  //     method: "GET",
  //     url: "/users"
  //   }).done (user) => {
  //
  //     $("<span class='username'>").text(user.name).appendTo('.user-box')
  //
  //   }
  //
  // })

  $(() => {
    $.ajax({
      method: "GET",
      url: "/users/myList"
    }).done((list) => {

    for (item in list) {
      $("<div class='item-box'>").text(list[item].title).appendTo('.user-box')
    }

    $("<button class='update'>").text('update').appendTo('.item-box')
    $("<button class='delete'>").text('delete').appendTo('.item-box')

    })
  })


})
