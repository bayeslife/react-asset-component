import React, { useReducer } from 'react';

import AssetComponent from './component-assets';
import { reducer as reducerSelectAsset, click } from './reducer-selectasset';
import { reducer as reducerAsset, replace } from './reducer-assetset';

const ContainerComponent = () => {
  const [assets, dispatch] = useReducer(reducerSelectAsset, reducerSelectAsset());
  const [selected] = useReducer(reducerAsset, reducerAsset());
  return <AssetComponent
    assets={ assets }
    selected={ selected }
    onClick={(selected) => dispatch(click(selected))}
  />
}

export default ContainerComponent
