import {Heading, Input, InputField, VStack} from "@gluestack-ui/themed";
import React from "react";

export default function PhoneNumberField() {
    return (
        <VStack space="xs">
            <Heading size="md">휴대폰 번호</Heading>

            <Input size="xl">
                <InputField />
            </Input>
        </VStack>
    );
}
