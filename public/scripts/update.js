
$(document).ready(() => {

  $(() => {
    $.ajax({
      method: "GET",
      url: "/users/myList"
    }).done((list) => {

    let fixId = location.pathname.split('/');
    let id = Number(fixId[2]);
    let currentList = '';

    for(item of list) {
      if (item['list_id'] === id) {
        currentList = item;
      }
    }

    let formBox = (".form-box");
      let form = $("<form method='POST'></form>").attr('action', `/list/${id}/update`);
        let title = $("<label for='title'>Title</label>");
        let titleInput = $("<input type='text' id='title' name='title'>").attr('value', currentList['title']);
        let category = $("<label for='category'>Category</label>");
        let categoryInput = $("<input type='text' id='category' name='category'>").attr('value', currentList['category']);
        let time = $("<label for='time'>Time</label>");
        let timeInput = $("<input type='integer' id='time' name='time'>").attr('value', currentList['time'])
        let submit = $("<button type='submit'>Update</button>")

    let fullForm = $(form)
      .append(title).append(titleInput)
      .append(category).append(categoryInput)
      .append(time).append(timeInput)
      .append(submit)

    $(formBox).append(fullForm)

    $(() => {
      $.ajax({
        method: "GET",
        url: `/task/${id}/update`
      }).done((tasks) => {

      let listNumber = 1;

      for (item of tasks) {
        console.log(item);
        let form = $("<form method='POST'></form>").attr('action', `/task/${item['task_id']}/${id}/update`);
          let description = $("<label for='description'>To-Do</label>");
          let descriptionInput = $("<input type='text' id='description' name='description'>").attr('value', item['description']);
          let url = $("<label for='url'>URL</label>")
          let urlInput = $("<input type='text' id='url' name='url'>").attr('value', item['url']);
          let submit = $("<button type='submit'>Update</button>");

        let fullForm = $(form)
          .append(description).append(descriptionInput)
          .append(url).append(urlInput)
          .append(submit);

        $('.form-box').append(fullForm)

        $("<form method='POST'>")
          .attr('action', `users/${item['task_id']}/delete`)
          .append("<button type='submit'>Delete</button>")
          .appendTo('.form-box')

        listNumber = item['task_id'];

      }

      $('.form-box').append("<button id='addTodo'>Add To-Do</button>")
      $('#addTodo').on('click', () => {
        let form = $("<form method='POST'></form>").attr('action', `/task/${id}/add`).attr('id', `${listNumber+1}`);
          let description = $("<label for='description'>To-Do</label>");
          let descriptionInput = $("<input type='text' id='description' name='description'>");
          let url = $("<label for='url'>URL</label>")
          let urlInput = $("<input type='text' id='url' name='url'>").attr('value', item['url']);
          let submit = $("<button type='submit'>Update</button>");
          let remove = $("<button id='remove'>Delete</button>");


        let fullForm = $(form)
          .append(description).append(descriptionInput)
          .append(url).append(urlInput)
          .append(submit).append(remove);

        $('.form-box').append(fullForm)

        $('#remove').on('click', () => {
          event.preventDefault();
          $(`#${listNumber+1}`).remove();
        })

      })

      $('.form-box').append("<a class='button' href='/users'>Submit</a>")


      })
    })

    })
  })



})
