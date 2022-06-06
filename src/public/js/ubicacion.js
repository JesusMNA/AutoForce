function iniciarMap(){
    var coord = {lat:24.03606 ,lng: -104.64586};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

const buscador = document.getElementById("buscar");

buscador.addEventListener("keyup", key => {
    if (key.code === "Enter") {
        location.href = "./index.html#main-down"
    }
});
