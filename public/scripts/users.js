
$(document).ready(() => {

  $(() => {
    $.ajax({
      method: "GET",
      url: "/users/username"
    }).done((user) => {

        for (item in user) {
          $("<div id='username'>").text(user[item].handle).prependTo('.user-box')
        }

    })
  })

  $(() => {
    $.ajax({
      method: "GET",
      url: "/users/myList"
    }).done((list) => {


      for (item of list) {

        let itemBox = $(`<div class='item-box'>`)
        let title = $(`<span class='title'>${item['title']}</span>`)
        let category = $(`<span class='category'>Category: ${item['category']}</span>`)
        let time = $(`<span class='time'>Time: ${item['time']} Min</span>`)

        let fullBox = $(itemBox).append(title).append(category).append(time)

        let update = $("<form id='#update' method='GET'>")
          .attr('action', `list/${item['list_id']}/update`)
          .append("<button type='submit'>Update</button>")
          .appendTo('.user-box')

        let remove = $("<form id='#delete' method='POST'>")
          .attr('action', `users/${item['list_id']}/delete`)
          .append("<button type='submit'>Delete</button>")
          .appendTo('.user-box')

        let boxSet = $(fullBox).append(update).append(remove)
        let linkBox = $(`<a href='/list/${item['list_id']}'>`).append(boxSet)

        $('.user-box').append(linkBox)

      }

    })
  })
})
