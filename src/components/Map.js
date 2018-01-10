import React, { Component } from 'react';
import WorldWind from '@nasaworldwind/worldwind';
import LookAtNavigator2 from './LoggingNavigator';

/**
 * This component displays Web World Wind in the application. In order to decide what will the map look like and what
 * should be displayed on top of that it is possible to work with the wwd inside of the copmonentDidMount, where the
 * Web World Wind instance is also created.
 */
class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            wwdCreated: false
        };
    }

    /**
     * In this method we create the Web World Wind component itself and store it in the state for the later usage.
     */
    componentDidMount(){
        if(!this.state.wwd) {
            let wwd = new WorldWind.WorldWindow("wwd-results");
            this.setState({wwd: wwd});

            let mapLayer = new WorldWind.BMNGLandsatLayer();

            wwd.addLayer(mapLayer);
            wwd.redraw();

            new LookAtNavigator2(wwd);
        }
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