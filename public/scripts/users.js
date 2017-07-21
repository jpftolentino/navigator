
$(document).ready((list) => {

  $(() => {
    $.ajax({
      method: "GET",
      url: "/users/myList"
    }).done((list) => {

    for (item in list) {
      $("<div class='item-box'>").text(list[item].title).appendTo('.user-box')
      $("<button class='update'>").text('update').appendTo('.user-box')
      $("<button>").addClass(`${list[item].list_id}`).text('delete').appendTo('.user-box')
    }


    })
  })

  $(".delete").on('click', () => {

  })

})
