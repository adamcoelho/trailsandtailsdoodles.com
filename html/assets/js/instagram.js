let Http = new XMLHttpRequest();
let url ='https://s3.us-east-2.amazonaws.com/instagram.trailsandtailsdoodles.com/instagram_feed.json';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function() {
  if(this.readyState === 4 && this.status === 200) {
    let json = JSON.parse(Http.responseText);
    for (let i = 0; i < json.length; i++) {
      document.getElementById("img" + i).src = json[i].media_url;
    }
  }
};
