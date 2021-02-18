require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function (esriConfig, Map, MapView, FeatureLayer) {

esriConfig.apiKey =  "AAPKdc25ad7513a24c46b92cd024b53471173ysex4xHWQwBw2IQ-kNnn5MYzM2Maqnuc7YbUYeHblfF461bYrN1hiCHw4m9SK0E"; 

const map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });

const view = new MapView({
          map: map,
          center: [38.675890, -90.377550], // Longitude, latitude
          zoom: 13, // Zoom level
          container: "viewDiv" // Div element
        });
//STL Parks feature layer (polygons) 
          const = parksLayer = new FeatureLayer({
                    url: "https://slustl.maps.arcgis.com/home/webmap/viewer.html?layers=309471f6db3242c8b1315bc5f07ca54a"
          });
map.add(parksLayer);
          
//STL Public Schools (points)
          const pubschoolLayer = new FeatureLayer({
                    url: "https://slustl.maps.arcgis.com/home/webmap/viewer.html?layers=5458d0ba2a2341b59b5ae3b05d4d922f"
          });
map.add(pubschoolLayer, 0);
          
          var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "d2e5c37512054e62a15464955dc65d95"
        }
      });
 });
