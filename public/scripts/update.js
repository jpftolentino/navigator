
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
      let form = $("<form method='POST' id='form1'></form>").attr('action', `/list/${id}/update`);
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

      let formBox = (".form-box");

      for (item of tasks) {
        let form = $("<form method='POST' id='form2'></form>").attr('action', `/task/${item['task_id']}/${id}/update`);
          let description = $("<label for='description'>To Do</label>");
          let descriptionInput = $("<input type='text' id='description' name='description'>").attr('value', item['description']);
          let submit = $("<button type='submit'>Update</button>");

        let fullForm = $(form).append(description).append(descriptionInput).append(submit);

        $('.form-box').append(fullForm)
      }

      })
    })

    })
  })

  // $('.form-box').append("<input id='submitAll' type='button' value='Submit'/>")
  // $('#submitAll').on('click', () => {
  //     $('#form1').submit()
  //     $('#form2').submit()
  // })


})
