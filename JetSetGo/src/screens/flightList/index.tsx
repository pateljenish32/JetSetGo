import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../components/card';
import style from './styles';
import {parseFlightData, getAirlines} from './parse';
import SortFilers from '../../components/filters';

export default function FlightList({route, navigation}: any) {
  const {from, to, showAll} = route.params;
  const [allFlight, setAllFlight] = useState<any>([]);
  const [filtredFlight, setFiltredFlight] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    fetch('https://api.npoint.io/4829d4ab0e96bfab50e7')
      .then(response => response.json())
      .then(data => {
        setAllFlight(data.data.result);
      })
      .catch(error => (console.error(error), setIsLoading(false)));
  };
  useEffect(() => {
    if (allFlight.length > 0) {
      let arr = allFlight.filter((item: any) => {
        return (
          item?.displayData?.source?.airport?.cityName.toLowerCase() === from &&
          item?.displayData?.destination?.airport?.cityName.toLowerCase() === to
        );
      });
      let data = showAll ? parseFlightData(allFlight) : parseFlightData(arr);
      setFiltredFlight(data);
      setIsLoading(false);
    }
  }, [allFlight]);

  const onPressSort = (value: string) => {
    if (value == 'High-Low') {
      filtredFlight.sort((a: any, b: any) => a.fare - b.fare);
    } else {
      filtredFlight.sort((a: any, b: any) => b.fare - a.fare);
    }
  };
  const onPressFilter = (value: string) => {
    let data = parseFlightData(allFlight).filter((el: any) => {
      return el.airlineName == value;
    });
    setFiltredFlight(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderCard = (item: any, index: number) => {
    return (
      <Card
        flightCode={item.flightCode}
        depTime={item.depTime}
        arrTime={item.arrTime}
        depLocation={item.depLocation}
        arrLocation={item.arrLocation}
        fare={item.fare}
        airlineName={item.airlineName}
        totalDuration={item.totalDuration}
        onPress={() => {
          navigation.navigate('flightDetails', {flight: item});
        }}
      />
    );
  };
  if (isLoading) {
    return (
      <View style={style.spinner}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }
  if (!isLoading && filtredFlight.length == 0) {
    return (
      <View style={style.spinner}>
        <Text style={style.emptyText}> No Data Found!</Text>
      </View>
    );
  }
  return (
    <View style={style.container}>
      {showAll && (
        <SortFilers
          onPressSort={(value: string) => onPressSort(value)}
          onPressFilter={(value: string) => onPressFilter(value)}
          filterValues={getAirlines(allFlight)}
        />
      )}
      <FlatList
        keyExtractor={item => item.id}
        data={filtredFlight}
        renderItem={({item, index}) => renderCard(item, index)}
        removeClippedSubviews={true}
      />
    </View>
  );
}
