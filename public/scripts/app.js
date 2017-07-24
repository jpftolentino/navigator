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

          // let $container = $('<div class="list"></div>');
          let $title = $('<div class="title">' + title + '</div>')
          let $category = $(`<div class='category'>Category: ${category}</div>`);
          let $time = $(`<div class="time">Time: ${time}</div>`);

          // $container.appendTo($('body'));
          // let $form = $("<form>", {
          //   action: '/list/' + list_id,
          //   method: 'GET',
          // }).addClass('list').appendTo($('body'));
          // $form.append('<input type="submit" value="' + title + '">');
          // $container.append($category);
          // $container.append($time);
          let $clickableLink = $('<a href="/list/'+ list_id+'"></a>');
          $clickableLink.addClass('button').addClass(category).addClass(time).appendTo($('body'));
          $clickableLink.append($title);
          $clickableLink.append($category);
          $clickableLink.append($time);

      }

      // let $clickableLink = $('<a href="/list/'+ list_id+'">' + title +'</a>');
      $clickableLink.addClass('button').appendTo($('body'));


  })
});

