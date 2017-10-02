import React, {PropTypes}            from 'react';
import MehndiListCard                from './MehndiListCard';
import {Grid, Row}                   from 'react-bootstrap';


const MehndiList = ({mehndis}) =>{
  return(
    <div>
    <Grid>
    <Row>
        {mehndis.map(mehndi=>
            <MehndiListCard key={mehndi.id} mehndi={mehndi} />
        )}
    </Row>
    </Grid>
    </div>
  );
};

MehndiList.propTypes = {
  mehndis: PropTypes.array.isRequired
};

export default MehndiList;
