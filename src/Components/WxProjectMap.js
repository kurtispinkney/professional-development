import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class WxMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -97.0621,
      lat: 36.4942,
      zoom: 3.5
    };
  }

  componentDidMount() {
    var mapStyle = {
      'version': 8,
      'name': 'Dark',
      'sources': {
      'mapbox': {
      'type': 'vector',
      'url': 'mapbox://mapbox.mapbox-streets-v8'
      },
      'overlay': {
      'type': 'image',
      'url': 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
      'coordinates': [
      [-80.425, 46.437],
      [-71.516, 46.437],
      [-71.516, 37.936],
      [-80.425, 37.936]
      ]
      }
      },
      'sprite': 'mapbox://sprites/mapbox/dark-v10',
      'glyphs': 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
      'layers': [
      {
      'id': 'background',
      'type': 'background',
      'paint': { 'background-color': '#111' }
      },
      {
      'id': 'water',
      'source': 'mapbox',
      'source-layer': 'water',
      'type': 'fill',
      'paint': { 'fill-color': '#2c2c2c' }
      },
      {
      'id': 'boundaries',
      'source': 'mapbox',
      'source-layer': 'admin',
      'type': 'line',
      'paint': {
      'line-color': '#797979',
      'line-dasharray': [2, 2, 6, 2]
      },
      'filter': ['all', ['==', 'maritime', 0]]
      },
      {
      'id': 'overlay',
      'source': 'overlay',
      'type': 'raster',
      'paint': { 'raster-opacity': 0.85 }
      },
      {
      'id': 'cities',
      'source': 'mapbox',
      'source-layer': 'place_label',
      'type': 'symbol',
      'layout': {
      'text-field': '{name_en}',
      'text-font': ['DIN Offc Pro Bold', 'Arial Unicode MS Bold'],
      'text-size': [
      'interpolate',
      ['linear'],
      ['zoom'],
      4,
      9,
      6,
      12
      ]
      },
      'paint': {
      'text-color': '#969696',
      'text-halo-width': 2,
      'text-halo-color': 'rgba(0, 0, 0, 0.85)'
      }
      },
      {
      'id': 'states',
      'source': 'mapbox',
      'source-layer': 'place_label',
      'type': 'symbol',
      'layout': {
      'text-transform': 'uppercase',
      'text-field': '{name_en}',
      'text-font': ['DIN Offc Pro Bold', 'Arial Unicode MS Bold'],
      'text-letter-spacing': 0.15,
      'text-max-width': 7,
      'text-size': [
      'interpolate',
      ['linear'],
      ['zoom'],
      4,
      10,
      6,
      14
      ]
      },
      'filter': ['==', ['get', 'class'], 'state'],
      'paint': {
      'text-color': '#969696',
      'text-halo-width': 2,
      'text-halo-color': 'rgba(0, 0, 0, 0.85)'
      }
      }
      ]
      };

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      // style: mapStyle,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('load', function() {
      map.addSource("image", {
        "type": "raster",
        "url": 'mapbox://kurtispinkney.27fhvdrw',
        // "url": "https://mesonet.agron.iastate.edu/archive/data/2020/08/04/GIS/uscomp/n0q_202008040005.png",
      });

      map.addLayer({
        "id": "overlay",
        "source": "image",
        "type": "raster",
        "paint": {
        "raster-opacity": 0.85
        }
    });
  })

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div id='wxmap'>
          <div className='sidebarStyle'>
              <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
          </div>
          <div ref={el => this.mapContainer = el} className="mapContainer"></div>   
      </div>
    )
  }
}
   
export default WxMap
  ReactDOM.render(<WxMap />, document.getElementById('root'));
