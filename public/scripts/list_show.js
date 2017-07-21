$(() => {
  $.ajax({
    method: "GET",
    url: "/api/task"
  }).done((task) => {

      let fixId = location.pathname.split('/');
      let id = fixId[2];
      let title = task[id].title;
      $('<div>').text(title).appendTo($('body'));

      $('<ul>').appendTo($('body'));
      for(item in task){
        let taskID = task[item].task_id;
        let listID = task[item].fk_list_id;
        let description = task[item].description;
        // let list
        //
        if(listID == id){
          $('<li>').text(description).appendTo($('ul'));
        }
      }


  });;
});

