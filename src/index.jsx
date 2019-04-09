import React, { useReducer } from 'react';

import AssetComponent from './component-assets';
import { reducer as reducerSelectAsset, click } from './reducer-selectasset';
import { reducer as reducerAsset, replace } from './reducer-assetset';

var theassets = ['asset1','asset2']


const ContainerComponent = () => {
  const [selected, dispatch] = useReducer(reducerSelectAsset, null)
  const [assets,replace] = useReducer(reducerAsset, theassets)
  return <AssetComponent
    assets={ assets }
    selected={ selected }
    onClick={(selected) => dispatch(click(selected.target.innerText))}
  />
}

export default ContainerComponent
