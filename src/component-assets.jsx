import React, { Fragment } from 'react';

const AssetComponent =  ({ assets, onClick }) => {
  
  let al = assets.map((asset)=>
      <li>{asset}</li>
    )
  return assets.length>0? <ul>{al}</ul> : <ul></ul> 
  }

export default AssetComponent

