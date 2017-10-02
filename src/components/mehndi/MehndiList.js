import React, {PropTypes}            from 'react';
import MehndiListCard                from './MehndiListCard';
import {Grid, Row, Col}                   from 'react-bootstrap'


const MehndiList = ({mehndis}) =>{
  return(
    <Grid>
        {mehndis.map(mehndi=>
            <MehndiListCard key={mehndi.id} mehndi={mehndi} />
        )}
    </Grid>
  );
};

MehndiList.propTypes = {
  mehndis: PropTypes.array.isRequired
};

export default MehndiList;
