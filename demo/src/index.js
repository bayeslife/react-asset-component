import React, {Component} from 'react'
import {render} from 'react-dom'

import Lib  from '../../src/index.js'

const AssetStatefulComponent = Lib.AssetStatefulComponent

class Demo extends Component {
  render() {
    return <div>
      <h1>short-interval-constrol-react-assets-component Demo</h1>
      <AssetStatefulComponent url="http://localhost:3001/assets"/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
