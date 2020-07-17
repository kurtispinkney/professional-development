import React from 'react';

import WxMap from '../Components/WxProjectMap';


const WxProjectPage = () => (
    <div id='wxproject'>
        <h1>WxProject
          <a class="btn" href="/">
             <i class="fa fa-home"></i> 
          </a> 
        </h1>
        <WxMap></WxMap>
    </div>
);

export default WxProjectPage;