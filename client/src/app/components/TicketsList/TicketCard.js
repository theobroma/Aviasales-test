import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import format from 'helpers/format';
import dayOfTheWeek from 'helpers/dayOfTheWeek';
import { filterShape, currencyShape, ticketShape } from 'types';
import TurkishImg from 'images/turkish-airlines.jpg';

import SegmentRow from './SegmentRow';
import StyledTicketCard from './TicketCard.styled';

const TicketCard = (props) => {
  const {
    ticket: {
      price,
      carrier,
      segments = [],
      arrival_date,
      arrival_time,
      // carrier,
      departure_date,
      departure_time,
      destination,
      destination_name,
      origin,
      origin_name,

      stops,
    },
    currency,
    filter,
  } = props;
  console.log(props);

  const renderStops = (val) => {
    if (val === 0) {
      return `Без пересадок`;
    }
    if (val === 1) {
      return `1 пересадка`;
    }
    if (val === 2 || val === 3 || val === 4) {
      return `${val} пересадки`;
    }
    return `${val} пересадок`;
  };

  const TitleBlock = (
    <Row style={{ marginBottom: '18px' }}>
      <Col md={16}>
        {/* <span className="price">{Math.ceil(price / currency[0].purchaseRateNB)}</span> */}
        <span className="price">13 400 Р</span>
      </Col>
      <Col md={8}>
        <div className="airlines-logo">
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>
      </Col>
    </Row>
  );

  const renderSegments = () => segments.map((segment) => <SegmentRow segment={segment} />);

  return (
    <StyledTicketCard>
      {TitleBlock}
      {renderSegments()}
    </StyledTicketCard>
  );
};

TicketCard.propTypes = {
  ticket: ticketShape,
  currency: PropTypes.arrayOf(currencyShape),
  filter: filterShape,
};

export default TicketCard;
