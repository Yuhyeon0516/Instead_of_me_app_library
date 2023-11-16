import {Box, Pressable, Text} from "@gluestack-ui/themed";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface IHeader {
    title: string;
}

export default function Header({title}: IHeader) {
    function onPressBackButton() {
        console.log("press");
    }

    return (
        <Box
            justifyContent="center"
            h={50}
            w={"100%"}
            px={10}
            position="relative"
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
            <Text
                position={"absolute"}
                fontSize={18}
                alignSelf={"center"}
                color="black"
                fontWeight={"$extrabold"}>
                {title}
            </Text>
        </Box>
    );
}
