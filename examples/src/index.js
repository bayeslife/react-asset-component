import React from 'react';
import { render} from 'react-dom';

import ContainerComponent from '../../src';

const App = () => (
    <ContainerComponent />
);
render(<App />, document.getElementById("root"));