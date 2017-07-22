$(() => {
  $.ajax({
    method: "POST",
    url: "/api/list"
  }).done((task) => {

      // let fixId = location.pathname.split('/');
      // let id = fixId[2];
      // let title = ""

      // for(item in task){
      //   let listID = task[item].fk_list_id;
      //   if(id == listID){
      //     title = task[item].title;
      //   }
      // }

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

      let user = req.session.user_id;

      $('<p>').text(user).appendTo($('body'));

      let list_id = list[item].list_id;
      let title = list[item].title;
      let $form = $("<form>", {
        action: '/list/' + list_id,
        method: 'GET',
      }).appendTo($('body'));
      $form.append('<input type="submit" value="' + title + '">');

  });;
});

  // let user = req.session.user_id
  // let title = req.body.title
  // let category = req.body.category
  // let time = req.body.time

  // knex('list')
  //   .insert({
  //     fk_users_id: user,
  //     title: title,
  //     category: category,
  //     time: time
  //   })
  //   .then((result) => {
  //     res.redirect('/newList')
  //   })

