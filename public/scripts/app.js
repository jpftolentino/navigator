$(() => {
  $.ajax({
    method: "GET",
    url: "/api/list"
  }).done((list) => {

      //Creates a form for each list with a submit value for a get request to actual list
      for(item in list){
          let list_id = list[item].list_id;
          let title = list[item].title;
          let $form = $("<form>", {
            action: '/list/' + list_id,
            method: 'GET',
          }).appendTo($('body'));
          $form.append('<input type="submit" value="' + title + '">');
      }


  });;
});

