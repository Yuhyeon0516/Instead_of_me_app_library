import React from "react";
import Payment from "./src/select_payment_product";
import {GluestackUIProvider} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config";
import {ToastProvider} from "@gluestack-ui/toast";
import {OverlayProvider} from "@gluestack-ui/overlay";

function App(): JSX.Element {
    return (
        <GluestackUIProvider config={config}>
            <ToastProvider>
                <OverlayProvider>
                    <Payment />
                </OverlayProvider>
            </ToastProvider>
        </GluestackUIProvider>
    );
}

export default App;
