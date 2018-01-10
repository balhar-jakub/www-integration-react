import React, { Component } from 'react';
import WorldWind from '@nasaworldwind/worldwind';

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            wwdCreated: false
        };
    }

    componentDidMount(){
        this.wwd = new WorldWind.WorldWindow("wwd-results");
        this.setState({wwdCreated: true});

        let mapLayer = new WorldWind.BMNGLandsatLayer();

        this.wwd.addLayer(mapLayer);
        this.wwd.redraw();
    }

    componentDidUpdate(){

    }

    render(){
        return (
            <div id="map">
                <canvas id="wwd-results"></canvas>
            </div>
        )
    }
}

export default Map;