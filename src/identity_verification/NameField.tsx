import React from "react";
import {Heading, Input, InputField, VStack} from "@gluestack-ui/themed";

export default function NameField() {
    return (
        <VStack space="xs">
            <Heading size="md">이름</Heading>

            <Input size="xl">
                <InputField />
            </Input>
        </VStack>
    );
}
