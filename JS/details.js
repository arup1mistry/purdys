var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');


// client connects to Contetful API
var client = contentful.createClient({
    space: 'ylw01i21hrxt',
    accessToken: 'YQ6Nfl7omcvvJXaRQ1bN33K8KzystqAJAuzFatI2O7k',
});


  var productDiv = document.getElementById('purdy');

  client.getEntry(id).then(function (entry) {
        var name = document.createElement('h1');
        name.classList.add('header');
        name.innerHTML = entry.fields.header;

        var headerImage = document.createElement('img');
        headerImage.classList.add('images');
        if (entry.fields.images) {
          headerImage.src = entry.fields.images.fields.file.url;
        }  


        
    productDiv.appendChild(header);
    productDiv.appendChild(images);
  });
