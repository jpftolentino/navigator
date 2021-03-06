$(() => {
  $.ajax({
    method: "GET",
    url: "/api/task"
  }).done((task) => {

      let fixId = location.pathname.split('/');
      let id = fixId[2];
      let title = ""
      let category = ""
      let time = ""

      for(item in task){
        let listID = task[item].fk_list_id;
        if(id == listID){
          title = task[item].title;
          category = task[item].category;
          time = task[item].time;
        }
      }

      // Put DOM items in variables to allow easier appending
      let listName = $('<div id="name">').text(title)
      let listCategory = $('<div id="category">').text(category)
      let listTime = $('<div id="time">').text(time)

      $('.list-box').append(listName).append(listCategory).append(listTime).append('<ul>')

      for(item in task){
        let taskID = task[item].task_id;
        let listID = task[item].fk_list_id;
        let description = task[item].description;
        let url = task[item].url;
        // let list
        //
        if(listID == id){

          $('<li>').text(description).appendTo($('ul'));
          $(`<a href="http://${url}" class="url">`).text("Go To There").appendTo($('ul'));

        }
      }
  })
});

