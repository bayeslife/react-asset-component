import React, { Fragment } from 'react';



const AssetComponent =  ({ assets=[], onClick }) => {
  let al = assets.map((asset)=> {
      return <li key={asset.key}><button  onClick={()=>{
        onClick(asset.key)
      }}>{asset.description}</button></li>
  })
  return al.length>0? <ul>{al}</ul> : <ul></ul> 
}

export default AssetComponent

