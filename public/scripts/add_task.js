$(() => {
  $.ajax({
    method: "GET",
    url: "/api/list"
  }).done((list) => {

      let fixId = location.pathname.split('/');
      let id = fixId[2];
      let title = list[id].title


      // for(item in list){
      //   let listID = list[item].list;
      //   if(id == listID){
      //     title = list[item].title;
      //   }
      // }

      $('<p>').text(id).appendTo($('body'));

      // $('<div>').text(title).appendTo($('body'));

      // $('<ul>').appendTo($('body'));
      // for(item in task){
      //   let taskID = task[item].task_id;
      //   let listID = task[item].fk_list_id;
      //   let description = task[item].description;
      //   // let list
      //   //
      //   if(listID == id){
      //     $('<li>').text(description).appendTo($('ul'));
      //   }
      // }
  })
});
