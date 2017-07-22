$(() => {
  $.ajax({
    method: "GET",
    url: "/api/list"
  }).done((task) => {

      let fixId = location.pathname.split('/');
      let id = fixId[2];
      let title = ""

      for(item in task){
        let listID = task[item].fk_list_id;
        if(id == listID){
          title = task[item].title;
        }
      }

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

