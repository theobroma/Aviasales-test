import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
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
  return (
    <StyledSegmentRow>
      <Row>
        <Col md={8}>
          <div className="label">{`${origin} - ${destination}`}</div>
          <div className="value">10:45 – 08:00 </div>
        </Col>
        <Col md={8}>
          <div className="label">В пути</div>
          <div className="value">10:45 </div>
        </Col>
        <Col md={8}>
          <div className="label">2 пересадки</div>
          <div className="value">{stops[0]} </div>
        </Col>
      </Row>
    </StyledSegmentRow>
  );
};

SegmentRow.propTypes = {};

export default SegmentRow;
