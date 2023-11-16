import React from "react";
import {Box, IconButton, Text} from "@yuhyeonkim/native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface IHeader {
    title: string;
}

export default function Header({title}: IHeader) {
    return (
        <Box
            justifyContent={"center"}
            h={"50px"}
            w={"100%"}
            position={"relative"}
            borderBottomWidth={"0.2px"}>
            <IconButton
                icon={
                    <MaterialIcons
                        name="arrow-back"
                        color={"black"}
                        size={30}
                    />
                }
                size={"2xl"}
                fontWeight={"bold"}
                px={"10px"}
                w={"50px"}
                h={"50px"}
                backgroundColor={"red"}
            />
            <Text
                position={"absolute"}
                fontSize={"18px"}
                alignSelf={"center"}
                fontWeight={"bold"}>
                {title}
            </Text>
        </Box>
    );
}
