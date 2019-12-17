import React from 'react';

import Directory from '../../components/directory/directory.component';


import './homepage.styles.scss';

//this section renders the homepage items
const HomePage = () => {
    return (
      <div className="homepage">
          <Directory />
      </div>
    );
};

export default HomePage;