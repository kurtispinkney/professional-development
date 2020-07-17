import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';



mapboxgl.accessToken = 'pk.eyJ1Ijoia3VydGlzcGlua25leSIsImEiOiJja2E2NzN4ZzEwNTNpMnRtamsyMmh0YjZxIn0.RjPMGT1svhp9t6FveQTV3g';

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
      const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
      });

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
  ReactDOM.render(<WxMap />, document.getElementById('app'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
