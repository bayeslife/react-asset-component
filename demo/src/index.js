import React, {Component} from 'react'
import {render} from 'react-dom'

import lib from '../../src/index.js'

const { AssetComponent, AssetStatefulComponent } = lib

function onSelect(e){
  console.log(e)
}

class Demo extends Component {

  

  render() {
    let assetList = [
      {key: "asset1", description: "asset1"},
      { key:"asset2",description: "asset2"}];

    return <div>
      <h1>short-interval-control-react-assets-component Demo</h1>
      <AssetStatefulComponent url="http://localhost:3002/assets"/>

      <h1>short-interval-control-react-assets-component Demo2</h1>
      <AssetComponent assets={assetList} onClick={onSelect}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
