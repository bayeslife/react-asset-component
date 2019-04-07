import { describe } from 'riteway';
import render from 'riteway/render-component';
import React from 'react';

import AssetComponent from '../src/component-assets';

describe('AssetComponent should render properly', async (assert) => {

  const createAssets = assets =>
    render(<AssetComponent assets={ assets } />)

    {
      const assets = []
      const $ = createAssets(assets);

      assert({
        given: 'Given no assets',
        should: 'Should render empty list.',
        actual: $('ul').children().length,
        expected: assets.length
      });
    }
    {
      const assets = ["test"]
      const $ = createAssets(assets);
      assert({
        given: 'Given no assets',
        should: 'Should render empty list.',
        actual: $('ul').children().length,
        expected: assets.length
      });
    }
    
});
