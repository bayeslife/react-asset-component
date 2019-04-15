
let selectedAsset = null

let assettype = 'assets-component/click'

const click = (asset) => {
    return {
        type: assettype,
        asset: asset
    }
}

const reducer = (state = null, { type, asset } = {}) => {
    switch (type) {
        case assettype: return selectedAsset = asset
        default: return selectedAsset;
    }
}

export { reducer, click };
