
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

    console.log(currentList);

    let formBox = (".form-box");
      let form = $("<form method='POST'></form>").attr('action', `/list/${id}/update`);
        let title = $("<label for='title'>Title</label>");
        let titleInput = $("<input type='text' id='title' name='title'>").attr('value', currentList['title']);
        let category = $("<label for='category'>Category</label>");
        let categoryInput = $("<input type='text' id='category' name='category'>").attr('value', currentList['category']);
        let time = $("<label for='time'>Time</label>");
        let timeInput = $("<input type='integer' id='time' name='time'>").attr('value', currentList['time'])
        let submit = $("<button type='submit'>Submit</button>")

    let fullForm = $(form)
      .append(title).append(titleInput)
      .append(category).append(categoryInput)
      .append(time).append(timeInput)
      .append(submit)

    $(formBox).append(fullForm)


    })
  })

})
