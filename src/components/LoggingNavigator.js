import WorldWind from '@nasaworldwind/worldwind';

/**
 * This is example component showing the extension of the classes from the Web World Wind to update their usage.
 * In this case we want to have another
 */
class LoggingNavigator extends WorldWind.LookAtNavigator {
    constructor(worldWind) {
        super(worldWind);

        console.log('LoggingNavigator was created.');
    }
}

export default LoggingNavigator;