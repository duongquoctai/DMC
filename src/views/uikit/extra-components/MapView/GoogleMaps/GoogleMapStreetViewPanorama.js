import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { GoogleMap, StreetViewPanorama } from '@react-google-maps/api';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

GoogleMapStreetViewPanorama.propTypes = {
  themes: PropTypes.object,
  className: PropTypes.string
};

function GoogleMapStreetViewPanorama({ themes, className, ...other }) {
  const classes = useStyles();

  const center = { lat: 51.5320665, lng: -0.177203 };
  const mapOptions = {
    zoom: 7,
    minZoom: 2,
    maxZoom: 16,
    center: center,
    controlSize: 24
  };

  return (
    <div className={clsx(classes.root, className)}>
      <GoogleMap
        options={mapOptions}
        mapContainerStyle={{ height: '100%', width: '100%' }}
        {...other}
      >
        <StreetViewPanorama position={center} visible={true} />
      </GoogleMap>
    </div>
  );
}

export default GoogleMapStreetViewPanorama;
