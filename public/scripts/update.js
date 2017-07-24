
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
    let formBox = (".form-style-6");
      let form = $("<form method='POST'></form>").attr('action', `/list/${id}/update`);

        let title = $("<label for='title'>Title</label>");
        let titleInput = $("<input type='text' id='title' name='title'>").attr('value', currentList['title']);

        let categoryLabel = $("<label for='category'>Category: </label>");
        let categorySelect = $("<select name='category'></select>");
          let categoryCurrent = $(`<option value='${currentList['category']}'>- ${currentList['category']} -</option>`);
          let categoryOne = $("<option value='Play'>Play</option>");
          let categoryTwo = $("<option value='Read'>Read</option>");
          let categoryThree = $("<option value='Watch'>Watch</option>")

        let category = $(categorySelect)
          .append(categoryCurrent).append(categoryOne)
          .append(categoryTwo).append(categoryThree);

        let timeLabel = $("<label for='time'>Time: </label>");
        let timeSelect = $("<select name='time'></select>");
          let timecurrent = $(`<option value='${currentList['time']}'>- ${currentList['time']} Min -</option>`)
          let timeOne = $("<option value=5>5 Min</option>");
          let timeTwo = $("<option value=10>10 Min</option>");
          let timeThree = $("<option value=15>15 Min</option>");
          let timeFour = $("<option value=30>30 Min</option>");
          let timeFive = $("<option value=60>60 Min</option>")
          let timeSix = $("<option value=120>120 Min</option>")
          let timeSeven = $("<option value=180>180 Min</option>")
          let timeEight = $("<option value=240>240 Min</option>")

        let time = $(timeSelect)
          .append(timecurrent).append(timeOne).append(timeTwo).append(timeThree).append(timeFour)
          .append(timeFive).append(timeSix).append(timeSeven).append(timeEight)

        let submit = $("<button type='submit'>Update</button>")

    // Compiling all elements into a full form
    let fullForm = $(form)
      .append(title).append(titleInput)
      .append(categoryLabel).append(category)
      .append(timeLabel).append(time)
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
        $(".form-style-6").append(fullForm)

        // Deletes todo from the database
        $("<form method='POST'>")
          .attr('action', `/task/${item['task_id']}/${id}/delete`)
          .append("<button type='submit'>Delete</button>")
          .appendTo('.form-box')

        // Increments the task currently on to its task_id
        listNumber = item['task_id'];

      }

      // Builds and adds a form with a new to-do to the page dynamically
      $('.form-style-6').append("<button id='addTodo'>Add To-Do</button>")
      $('#addTodo').on('click', () => {
        let form = $("<form method='POST'></form>").attr('action', `/task/${id}/add`).attr('id', `${listNumber+1}`);
          let description = $("<label for='description'>To-Do</label>");
          let descriptionInput = $("<input type='text' id='description' name='description'>");
          let url = $("<label for='url'>URL</label>")
          let urlInput = $("<input type='text' id='url' name='url'>");
          let submit = $("<button type='submit'>Add</button>");
          let remove = $("<button id='remove'>Delete</button>");


        let fullForm = $(form)
          .append(description).append(descriptionInput)
          .append(url).append(urlInput)
          .append(submit).append(remove);

        $('.form-style-6').append(fullForm)

        // Removes the new todo form by clearing it from the DOM before it is submitted
        $('#remove').on('click', () => {
          event.preventDefault();
          $(`#${listNumber+1}`).remove();
        })

      })

      $('.form-style-6').append("<a class='input' href='/users'>Submit</a>")


      })
    })

    })
  })

})
