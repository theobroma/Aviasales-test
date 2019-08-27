import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Radio } from 'antd';
import shortid from 'shortid';
import { filterShape, ticketShape } from 'types';
import TicketCard from './TicketCard';

const TicketsList = (props) => {
  const { tickets = [], filter } = props;

  const filteredTickets = tickets.filter((ticket) => {
    const ticketStops = ticket.segments[0].stops.length;
    console.log(ticketStops);
    return filter.stops.includes(ticketStops);
  });

  // const arr = tickets.slice(0, 5);
  const renderTickets = () =>
    filteredTickets
      .slice(0, 5)
      .map((ticket) => <TicketCard key={shortid.generate()} ticket={ticket} {...props} />);

  return (
    <Fragment>
      {/* {tickets.length} */}
      <Row>
        <Col md={24}>
          {/* <Radio.Group value={filter.currency} onChange={this.handleCurrencyChange}> */}
          <Radio.Group>
            <Radio.Button value="fastest">Самый быстрый</Radio.Button>
            <Radio.Button value="cheapest">Самый дешевый</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      {renderTickets()}
    </Fragment>
  );
};

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(ticketShape),
  filter: filterShape,
};

export default TicketsList;
