import moment from 'moment';
import {convertDateInTime} from '../../utils/index';

interface flightObj {
  id?: number | undefined;
  totalDuration?: string | undefined;
  depTime?: string | undefined;
  arrTime?: string | undefined;
  depLocation?: string | undefined;
  arrLocation?: string | undefined;
  fare?: string | undefined;
  flightCode?: string | undefined;
  airlineName?: string | undefined;
  depAirport?: string | undefined;
  arrAirport?: string | undefined;
  date?: string | undefined;
}

export const parseFlightData = (data: any) => {
  let final: any = [];

  data.forEach((element: any) => {
    let displayData: any = element?.displayData;
    let obj: flightObj = {};

    (obj.id = element.id),
      (obj.totalDuration = displayData?.totalDuration),
      (obj.depTime = convertDateInTime(displayData?.source?.depTime)),
      (obj.arrTime = convertDateInTime(displayData?.destination?.arrTime)),
      (obj.depLocation = `${displayData?.source?.airport?.cityName} (${displayData?.source?.airport?.cityCode})`),
      (obj.arrLocation = `${displayData?.destination?.airport?.cityName} (${displayData?.destination?.airport?.cityCode})`),
      (obj.fare = element?.fare.toString());
    (obj.depAirport = displayData?.source?.airport?.airportName),
      (obj.date = moment(displayData?.source?.depTime).format('DD MMM YYYY')),
      (obj.arrAirport = displayData?.destination?.airport?.airportName),
      displayData?.airlines.forEach((air: any) => {
        (obj.flightCode = `${air?.airlineCode} ${air?.flightNumber}`),
          (obj.airlineName = air?.airlineName);
        final.push(obj);
      });
  });
  return final;
};

export const getAirlines = (data: any) => {
  let airlines: any = [];
  data.forEach((el: any) => {
    el?.displayData?.airlines.forEach((airport: any) => {
      if (!airlines.includes(airport?.airlineName)) {
        airlines.push(airport?.airlineName);
      }
    });
  });

  return airlines;
};
