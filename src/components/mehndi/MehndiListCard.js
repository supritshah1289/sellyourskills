import React, {PropTypes}       from 'react';
import {Link}                   from 'react-router';
import {Grid, Row, Col, Thumbnail, Button}    from 'react-bootstrap';

const MehndiListCard = ({mehndi}) =>{
  return(
    <Col xs={6} md={4}>
      <Thumbnail src={mehndi.imageUrl} alt="242x200">
        <h3>{mehndi.title}</h3>
        <p>{mehndi.city}, {mehndi.state}</p>
        <p>
          <Button bsStyle="primary">Hire Me</Button>&nbsp;
          <Button bsStyle="default">Get in touch</Button>
        </p>
      </Thumbnail>
    </Col>
  );
};

MehndiListCard.propTypes = {
  mehndi: PropTypes.object.isRequired
};

export default MehndiListCard;
