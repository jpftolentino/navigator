$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((list) => {

    // let newList = [];

    // for(item of list) {
    //   $("<div>").text(item.title).appendTo($("body"));
    //   $("<div>").text(item.description).appendTo($('body'));
    // }

    // for(item of list) {
    //   newList += (item.title + '<br/>');
    // }
    // let list_id = item.list_id
    $("<div>").text(list[0].title).appendTo($("body"));
    let newList = list[0].title;
    // $("<div>").text(newList).appendTo($("body"));

    //iterate through lists
    for(i in list){
       $("<div>").text(i).appendTo($("body"));
       newList = list[i].title;
    }

    for(i in list){
       $("<div>").text(i).appendTo($("body"));
       newList = list[i].title;
    }

    //If title is the same as the current list tittle add tasks
      for(item in list){
        if(list[item].title === newList){
          // $("<div>").text(item.description).appendTo($("body"));
          $("<div>").text(list[item].description).appendTo($("body"));
        }
      }

    // $("<div>").text(list[0].description).appendTo($("body"));
    // $("<div>").text(list[1].description).appendTo($("body"));


    // for(item of list){
    //   if(list_id == item.list_id){
    //     $("<div>").text(item.).appendTo($("body"));
    //   }
    // }



  });;
});

//Loop through each user and display each unique title
//Each unique is placed in the list(title)
