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
      $form.append('<input type="text" placeholder="insert link here!" name=url>');
      $form.append('<input type="submit" value="Add Task">');
      // $('<button>').appendTo($('form'));


  }).then(() => {
      $.ajax({
      method: "GET",
      url: "/api/task"
      }).done((task) => {

        let fixId = location.pathname.split('/');
        let id = fixId[2];

        // console.log(task);
        // $('<ul>').appendTo($('.create-list'));


        for(item in task){
          let listID = task[item].fk_list_id;
          let description = task[item].description;
          let url = task[item].url
          console.log(listID);
          if(listID == id){
            $('<div>').text(description).appendTo($('.create-list'));
            $('<div>').html('<a href=\'' + url + '\'>' + url + '</a>').appendTo($('.create-list'));
            $('<br/>').appendTo($('.create-list'));
            // console.log(description);
          }
        }

    })
  })
});
