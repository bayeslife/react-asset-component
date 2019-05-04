import React, { useReducer, useEffect } from 'react';

import axios from 'axios'
import AssetComponent from './component-assets';
import { reducer as reducerSelectAsset, click } from './reducer-selectasset';
import { reducer as reducerAsset, replace } from './reducer-assetset';

var theassets = ['asset1','asset2']

const ContainerComponent = () => {
  const [selected, dispatch] = useReducer(reducerSelectAsset, null)
  const [assets,setAssets] = useReducer(reducerAsset, theassets)
  
  const fetch = async () =>  {
    const result = await axios('http://localhost:3000/assets')
    setAssets(result.data)
  }

  useEffect(() => {  
    fetch()
  }, []);


  return <AssetComponent
    assets={ assets }
    selected={ selected }
    onClick={(selected) => dispatch(click(selected.target.innerText))}
  />
}

export default ContainerComponent
