$(() => {
  $.ajax({
    method: "GET",
    url: "/api/list"
  }).done((list) => {

      //Creates a form for each list with a submit value for a get request to actual list
      for(item in list){
          let list_id = list[item].list_id;
          let title = list[item].title;
          let category = list[item].category;
          let time = list[item].time;

          let $container = $('<div>');
          let $category = $(`<span>Category: ${category}</span>`);
          let $time = $(`<span>Time: ${time}</span>`);

          $container.appendTo($('body'));
          let $form = $("<form>", {
            action: '/list/' + list_id,
            method: 'GET',
          }).addClass('list').appendTo($($container));
          $form.append('<input type="submit" value="' + title + '">');
          ($('input')).append($category);
          $container.append($time);

      }


  })
});

