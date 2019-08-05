import {
  shape,
  number,
  string,
  // bool,
  // oneOf,
  arrayOf,
} from 'prop-types';

export const filterShape = shape({
  currency: string,
  stops: arrayOf(number),
});

export const currencyShape = shape({
  baseCurrency: string,
  currency: string,
  purchaseRateNB: number,
  saleRateNB: number,
});

export const ticketShape = shape({
  arrival_date: string,
  arrival_time: string,
  // carrier: PropTypes.string,
  departure_date: string,
  departure_time: string,
  destination: string,
  destination_name: string,
  origin: string,
  origin_name: string,
  price: number,
  stops: number,
});

export default {
  filterShape,
  currencyShape,
  ticketShape,
};
