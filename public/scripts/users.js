
$(document).ready((list) => {

  $(() => {
    $.ajax({
      method: "GET",
      url: "/users/myList"
    }).done((list) => {

    let postForm = $("<form method='POST'>")

    for (item in list) {
      $("<div class='item-box'>").text(list[item].title).appendTo('.user-box')
      $("<a class='button' href='/users/update'>").attr('name', `${list[item].list_id}`).text('update').appendTo('.user-box')
      $(postForm).attr('action', `users/${list[item].list_id}/delete`).appendTo('.user-box')
      // $("<a>", {href: `users/${list[item].list_id}/delete`}).addClass('button').text('delete').appendTo('.user-box')
    }


    })
  })

  $("#delete").on('click', () => {

  })


})
