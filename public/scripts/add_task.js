$(() => {
  $.ajax({
    method: "GET",
    url: "/api/list"
  }).then((list) => {

      let fixId = location.pathname.split('/');
      let id = fixId[2];
      let title = ""

      for(item in list){
        let listID = list[item].list_id;
        if(id == listID){
          title = list[item].title;
        }
      }

      // $('<div>').text(title).appendTo($('body'));

      $('<h1>').text(title).prependTo($('.create-list'));
      let $form = $('<form>', {
        action: '/newList/' + id,
        method: 'POST',
      }).attr('id',id).appendTo($('.create-list'));
      $form.append('<input type="text" placeholder="What shall we do today?" name=description>');
      $form.append('<input type="submit" value="Add Task">');
      // $('<button>').appendTo($('form'));


  }).then(() => {
      $.ajax({
      method: "GET",
      url: "/api/task"
      }).done((task) => {

        let fixId = location.pathname.split('/');
        let id = fixId[2];

        console.log(task);
        $('<ul>').appendTo($('.create-list'));


        for(item in task){
          let listID = task[item].fk_list_id;
          let description = task[item].description;
          console.log(listID);
          if(listID == id){
            $('<li>').text(description).appendTo($('ul'));
            console.log(description);
          }
        }

    })
  })
});

// $("<form>", {
//             action: '/list/' + list_id,
//             method: 'GET',
//           }).addClass('list').appendTo($('body'));

//     <form method='POST' action='/newList/<%=  %>'>
//       <label>Add Task:</label>
//       <input type='text' id='task' name='task'>
//       <button type='submit'>Add Task</button>
//     </form>
