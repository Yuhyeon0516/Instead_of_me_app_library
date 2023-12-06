import React from "react";
import {GluestackUIProvider} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config";
import {ToastProvider} from "@gluestack-ui/toast";
import {OverlayProvider} from "@gluestack-ui/overlay";
import {SafeAreaProvider} from "react-native-safe-area-context";
import WritePost from "./src/write_post";

function App(): JSX.Element {
    return (
        <GluestackUIProvider config={config}>
            <SafeAreaProvider>
                <ToastProvider>
                    <OverlayProvider>
                        <WritePost />
                    </OverlayProvider>
                </ToastProvider>
            </SafeAreaProvider>
        </GluestackUIProvider>
    );
}

export default App;
