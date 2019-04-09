import { describe } from 'riteway';
import render from 'riteway/render-component';
import React from 'react';

import AssetComponent from '../src/component-assets';

describe.only('AssetComponent should render properly', async (assert) => {

  const createAssets = assets => render(<AssetComponent assets={assets}/>)
    {
      const assets = []
      const $ = createAssets(assets);

      assert({
        given: 'Given no assets',
        should: 'Should render empty list.',
        actual: $('ul').html(),
        expected: ''
      });
    }
    {
      let assetname = 'test'
      const assets = [assetname]
      const $ = createAssets(assets);
      assert({
        given: 'Given no assets',
        should: 'Should list with one item',
        actual: $('ul').html(),
        expected: `<li><button>${assetname}</button></li>`
      });
    }
    
});
