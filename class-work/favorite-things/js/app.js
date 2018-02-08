/*var favoriteThings = [
  {
    image: 'http://images.all-free-download.com/images/graphicthumb/cute_puppy_photo_picture_11_168839.jpg',
    text: 'Puppies!'
  },
  {
    image: 'http://images4.fanpop.com/image/photos/22400000/Cute-Kitten-kittens-22438020-480-360.jpg',
    text: 'Kittens!!'
  },
  {
    image: 'https://solidgeargroup.com/wp-content/uploads/2016/08/technology-1283624_770.jpg',
    text: 'JavaScript!!!'
  }
];

*/


//favoriteThings.forEach(addFavThings);

function addThings (thing) {

  var thingFields = thing.fields;

  $('#favoriteThings').append('<img src="'+thingFields.image+'">');
  $('#favoriteThings').append('<p>'+thingFields.text+'</p>');

}




$.ajax({
  url: 'https://api.airtable.com/v0/appQytW1PVY1M77vN/Favorites?maxRecords=20&view=Grid%20view',
  type: 'GET',
  headers: {
    Authorization: 'Bearer keyHSu1cfEZyaBVMg'
  },
  success: function (response){
    var data = response.records;
    console.log('Records:');
    console.log(data);

    data.forEach(addThings);
    }
})


$.ajax({
  url: 'https://api.airtable.com/v0/appQytW1PVY1M77vN/Favorites',
  headers: {
    'Authorization': 'Bearer keyHSu1cfEZyaBVMg'
  },
  type: 'POST',
  data: {
    fields: {
      text: 'Chocolate',
      name: 'Adrienne',
      image: 'picture-of-chocolate.jpg'
    }
  },
  success: function(response) {
    alert('Data added!');
  }
})