
let selectedAsset = null

const click = (asset) => ({
    type: 'assets-component/click',
    asset: asset
})

const reducer = (state = null, { type, asset } = {}) => {
    switch (type) {
        case click().type: return selectedAsset = asset
        default: return selectedAsset;
    }
}

export { reducer, click };
