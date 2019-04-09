
let selectedAsset = null

let assettype = 'assets-component/click'

const click = (asset) => {
    console.log(asset)
    return {
        type: assettype,
        asset: asset
    }
}

const reducer = (state = null, { type, asset } = {}) => {

    console.log(`R ${type} ${JSON.stringify(asset)}`)
    switch (type) {
        case assettype: return selectedAsset = asset
        default: return selectedAsset;
    }
}

export { reducer, click };
