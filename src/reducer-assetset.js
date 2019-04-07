
let assets = []

const replace = (assets) => ({
    type: 'assets-component/click',
    assets: assets
})

const reducer = (state = [], { type, assets: newassets } = {}) => {
    switch (type) {
        case replace().type: return assets = newassets
        default: return assets;
    }
}

export { reducer, replace };
