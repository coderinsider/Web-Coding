var data;
var request = new XMLHttpRequest();

request.open('GET', 'data.json');

request.onreadystatechange = function() {
  if(
    request.status === 200 &&
    request.readyState === 4
  ) {
    data = JSON.parse(request.responseText);
    console.log(data);
    console.log(request);
  }
}

request.send();