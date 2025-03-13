import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Map from './components/Map';
import MapView, { Marker } from 'react-native-maps';
import { fetchPlaces } from './apis/foursquareAPI';
import { getUserLocation } from './components/geolocation';


export default function App() {
    <View>
      <Text>Hello World</Text>
    </View>
  const [region, setRegion] = useState(null);
  const [places, setPlaces] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getUserLocation()
      .then((coords) => {
        const { latitude, longitude } = coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });

        fetchPlaces(latitude, longitude).then((fetchedPlaces) => {
          setPlaces(fetchedPlaces);
        });
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  if (!region) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Map region={region} places={places} />
      <View style={{ position: 'absolute', top: 50, left: 20 }}>
        <Text>Nearby places:</Text>
        {places.map((place, index) => (
          <Text key={index}>{place.name}</Text>
        ))}
      </View>
    </View>
  );
};
