import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import format from 'helpers/format';
import StyledSegmentRow from './SegmentRow.styled';

// {
//     "origin":"MOW",
//     "destination":"HKT",
//     "date":"2019-08-15T08:23:00.000Z",
//     "stops":[
//        "BKK"
//     ],
//     "duration":1597
//  },

const SegmentRow = (props) => {
  const {
    segment: { origin, destination, date, stops, duration },
  } = props;

  const renderStopsCount = (val) => {
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

  const renderStops = () => stops.join(', ');

  return (
    <StyledSegmentRow>
      <Row>
        <Col md={8}>
          <div className="label">{`${origin} - ${destination}`}</div>
          <div className="value">10:45 – 08:00 </div>
        </Col>
        <Col md={8}>
          <div className="label">В пути</div>
          <div className="value">{`${Math.floor(duration / 60)}:${duration % 60}`} </div>
        </Col>
        <Col md={8}>
          <div className="label">{renderStopsCount(stops.length)}</div>
          <div className="value">{renderStops()} </div>
        </Col>
      </Row>
    </StyledSegmentRow>
  );
};

SegmentRow.propTypes = {};

export default SegmentRow;
