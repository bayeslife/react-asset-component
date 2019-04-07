import { describe } from 'riteway';
import { reducer, replace } from '../src/reducer-assetset';

describe('asset set reducer', async assert => {
    {
        let initialState = reducer()
        assert({
            given: 'no arguments',
            should: 'return the valid initial state',
            actual: initialState.length,
            expected: 0
        });
    }
    {
        let assets = ['test']
        let action = replace(assets)
        let initialState = []
        let newstate = reducer(initialState, action)
        assert({
            given: 'initial state and the assets are replaced',
            should: 'assets be equal to replace assets',
            actual: newstate.length,
            expected: 1
        });   
    }
});