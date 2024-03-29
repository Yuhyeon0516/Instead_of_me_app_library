import {
    HStack,
    Input,
    InputField,
    InputIcon,
    InputSlot,
    Pressable,
} from "@gluestack-ui/themed";
import {Search} from "lucide-react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface ISearchHeader {
    placeHolder: string;
}

export default function SearchHeader({placeHolder}: ISearchHeader) {
    function onPressBackButton() {
        console.log("press");
    }

    return (
        <HStack
            backgroundColor="white"
            alignItems="center"
            h={50}
            w={"100%"}
            px={10}
            py={30}
            borderBottomColor="$warmGray300"
            borderBottomWidth={0.5}>
            <Pressable
                onPress={onPressBackButton}
                w={50}
                h={50}
                alignItems="center"
                justifyContent="center">
                <MaterialIcons name="arrow-back" color={"black"} size={30} />
            </Pressable>
            <Input
                variant="rounded"
                size="md"
                flex={1}
                alignItems="center"
                bgColor="$trueGray50">
                <InputSlot pl={10}>
                    <InputIcon as={Search} size="md" color="black" />
                </InputSlot>
                <InputField
                    pl={10}
                    placeholder={placeHolder}
                    placeholderTextColor={"black"}
                />
            </Input>
        </HStack>
    );
}
