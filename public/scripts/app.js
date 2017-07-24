
$(() => {
  $.ajax({
    method: "GET",
    url: "/api/list"
  }).done((list) => {


      //Creates a button for each list with a submit value for a get request to actual list
      for(item in list){
          let list_id = list[item].list_id;
          let title = list[item].title;
          let category = list[item].category;
          let time = list[item].time;

          let $title = $('<div class="title">' + title + '</div>')
          let $category = $(`<div class='category'>Category: ${category}</div>`);
          let $time = $(`<div class="time">Time: ${time}</div>`);
          let $clickableLink = $('<a href="/list/'+ list_id+'"></a>');


          $('<div>').addClass('mixAni' + list_id).appendTo($('.container'));
          $clickableLink.addClass('mix').addClass(category).addClass('t'+ time).addClass('button').appendTo($('.mixAni'+list_id));
          $clickableLink.append($title);
          $clickableLink.append($category);
          $clickableLink.append($time);

      }

      // let $clickableLink = $('<a href="/list/'+ list_id+'">' + title +'</a>');
      $clickableLink.addClass('button').appendTo($('.mixAni'));
  }).then(() => {
      var mixer = mixitup('.container');
      var mixer = mixitup(containerEl);
      var mixer = mixitup(containerEl, {
              selectors: {
                  target: '.blog-item'
              },
              animation: {
                  effectsIn: 'fade translateY(-100%)'
              }
      });
  })
});

