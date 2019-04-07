import { describe } from 'riteway';
import { reducer, click } from '../src/reducer-selectasset';

describe('asset reducer', async assert => {
    {
        assert({
            given: 'no arguments',
            should: 'return the valid initial state',
            actual: reducer(),//Initial State
            expected: null
        });

    }
    {
        let asset = 'test'
        let action = click(asset)
        let initial = []
        assert({
            given: 'initial state and an asset is selected',
            should: 'add an asset to the selected list',
            actual: reducer(initial, action),
            expected: asset
        });   
    }
});