$(() => {
  $('form').on('submit', (event) => {
  event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/newList"

    // }).then((list_id) => {



          // let user = req.session.user_id
          // let title = req.body.title
          // let category = req.body.category
          // let time = req.body.time

          // knex('list')
          //   .returning('list_id')
          //   .insert({
          //     fk_users_id: user,
          //     title: title,
          //     category: category,
          //     time: time
          //   })
        // $('<p>').text('Hey it worked!').append($('body'));
        // console.log(id);
        // console.log(list_id);
        // $('form').remove();
        // res.redirect("/newList");
    // })
  });
});

