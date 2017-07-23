
$(document).ready(() => {

  // Sends in all lists associated with current user
  $(() => {
    $.ajax({
      method: "GET",
      url: "/users/myList"
    }).done((list) => {

    // Takes the list number out of the URL
    let fixId = location.pathname.split('/');
    let id = Number(fixId[2]);
    let currentList = '';

    // Loops through lists and finds the one to update
    for(item of list) {
      if (item['list_id'] === id) {
        currentList = item;
      }
    }

    // Building the form dynamically to get all of the nesting correct
    let formBox = (".form-box");
      let form = $("<form method='POST'></form>").attr('action', `/list/${id}/update`);
        let title = $("<label for='title'>Title</label>");
        let titleInput = $("<input type='text' id='title' name='title'>").attr('value', currentList['title']);
        let category = $("<label for='category'>Category</label>");
        let categoryInput = $("<input type='text' id='category' name='category'>").attr('value', currentList['category']);
        let time = $("<label for='time'>Time</label>");
        let timeInput = $("<input type='integer' id='time' name='time'>").attr('value', currentList['time'])
        let submit = $("<button type='submit'>Update</button>")

    // Compiling all elements into a full form
    let fullForm = $(form)
      .append(title).append(titleInput)
      .append(category).append(categoryInput)
      .append(time).append(timeInput)
      .append(submit)

    // Appending my new form to the page using a container already there
    $(formBox).append(fullForm)

    // Nested AJAX call to get all tasks associated with the list currently being edited
    $(() => {
      $.ajax({
        method: "GET",
        url: `/task/${id}/update`
      }).done((tasks) => {

      // Variable to store the task_id of the last task appended to page
      let listNumber = 1;

      // Loops through all of the tasks associated to the list
      for (item of tasks) {

        // Building the task update form with variables
        let form = $("<form method='POST'></form>").attr('action', `/task/${item['task_id']}/${id}/update`);
          let description = $("<label for='description'>To-Do</label>");
          let descriptionInput = $("<input type='text' id='description' name='description'>").attr('value', item['description']);
          let url = $("<label for='url'>URL</label>")
          let urlInput = $("<input type='text' id='url' name='url'>").attr('value', item['url']);
          let submit = $("<button type='submit'>Update</button>");

        // The full form build
        let fullForm = $(form)
          .append(description).append(descriptionInput)
          .append(url).append(urlInput)
          .append(submit);

        // Appending the full form to the page using the form box already there
        $('.form-box').append(fullForm)

        // Deletes todo from the database
        $("<form method='POST'>")
          .attr('action', `/task/${item['task_id']}/${id}/delete`)
          .append("<button type='submit'>Delete</button>")
          .appendTo('.form-box')

        // Increments the task currently on to its task_id
        listNumber = item['task_id'];

      }

      // Builds and adds a form with a new to-do to the page dynamically
      $('.form-box').append("<button id='addTodo'>Add To-Do</button>")
      $('#addTodo').on('click', () => {
        let form = $("<form method='POST'></form>").attr('action', `/task/${id}/add`).attr('id', `${listNumber+1}`);
          let description = $("<label for='description'>To-Do</label>");
          let descriptionInput = $("<input type='text' id='description' name='description'>");
          let url = $("<label for='url'>URL</label>")
          let urlInput = $("<input type='text' id='url' name='url'>");
          let submit = $("<button type='submit'>Update</button>");
          let remove = $("<button id='remove'>Delete</button>");


        let fullForm = $(form)
          .append(description).append(descriptionInput)
          .append(url).append(urlInput)
          .append(submit).append(remove);

        $('.form-box').append(fullForm)

        // Removes the new todo form by clearing it from the DOM before it is submitted
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
