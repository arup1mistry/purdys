var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');


// client connects to Contetful API
var client = contentful.createClient({
    space: 'ylw01i21hrxt',
    accessToken: 'YQ6Nfl7omcvvJXaRQ1bN33K8KzystqAJAuzFatI2O7k',
});

var productsDiv = document.getElementById ('products-1')
  client.getEntries({content_type: 'purdy',}).then(function (entries) {
   console.log(entries);
   entries.items.forEach(function (entry) {
    console.log(entry)
    var productDiv = document.createElement ('div');
    productDiv.classList.add('product');

    var header = document.createElement('h1');
    header.innerHTML = entry.fields.header;
    productDiv.append(header);

    var images = document.createElement('img');
    if (entry.fields.images){
      images.src = entry.fields.images.fields.file.url;
      productDiv.append(images);
    }
 
    var linkToDetails = document.createElement('a');
            linkToDetails.href = 'product.html?id=' + entry.sys.id;
            linkToDetails.appendChild(images);
            productDiv.append(header);


            productsDiv.append(productDiv);

   });
  });