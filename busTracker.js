const busStops = [
    [-84.503082, 39.132401],
    [-84.507607, 39.132172],
    [-84.509262, 39.132553],
    [-84.510984, 39.129271],
    [-84.509512, 39.129092],
    [-84.501495, 39.130905]
  ];
  
  
  
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3Ryb3VkbmF0IiwiYSI6ImNrbTB3eHlpcTBwYTEyb3IzeTdubWxqMDgifQ.2yCF8IyZfEmQPpKC8ur1Jw';

    
    


  let map = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-84.504510, 39.132170],
      zoom: 14,

  });

  var marker = new mapboxgl.Marker()
    .setLngLat([-84.503082, 39.132401])
    .addTo(map);
let counter = 0;
var timer = null;




    

function move() {
        if(counter < 5) {
            counter++;
        }
        else{
            counter = 0;
        }
        
        marker.setLngLat(busStops[counter]);
        
        timer = setTimeout(() => {move()}, 1000);
        
        }

function stop() {
    clearTimeout(timer);
}
    
  

   






