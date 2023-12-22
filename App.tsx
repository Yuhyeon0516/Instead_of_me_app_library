import React from "react";
import {GluestackUIProvider} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config";
import {ToastProvider} from "@gluestack-ui/toast";
import {OverlayProvider} from "@gluestack-ui/overlay";
import {SafeAreaProvider} from "react-native-safe-area-context";
import SelectModifyMarketInformation from "./src/select_modify_market_information";

function App(): JSX.Element {
    return (
        <GluestackUIProvider config={config}>
            <SafeAreaProvider style={{backgroundColor: "white"}}>
                <ToastProvider>
                    <OverlayProvider>
                        <SelectModifyMarketInformation />
                    </OverlayProvider>
                </ToastProvider>
            </SafeAreaProvider>
        </GluestackUIProvider>
    );
}

export default App;
