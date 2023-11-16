import {Box, NativeBaseProvider} from '@yuhyeonkim/native-base';
import React from 'react';

function App(): JSX.Element {
    return (
        <NativeBaseProvider>
            <Box />
        </NativeBaseProvider>
    );
}

export default App;
