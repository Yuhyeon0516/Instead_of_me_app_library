import React from "react";
import {IGuidItem} from "./type";
import {
    Box,
    Button,
    ButtonText,
    HStack,
    Heading,
    Text,
    VStack,
} from "@gluestack-ui/themed";

export default function GuideItem({
    difficulty,
    title,
    description,
    bgColor,
}: IGuidItem) {
    return (
        <HStack
            space="md"
            px={15}
            py={20}
            borderWidth={1}
            borderColor="$trueGray400"
            borderRadius={10}
            w={"90%"}
            h={100}>
            <Box
                bgColor={bgColor}
                borderRadius={20}
                justifyContent="center"
                alignItems="center"
                w={60}
                h={40}>
                <Text color="white" fontWeight="$bold" fontSize={14}>
                    {difficulty}
                </Text>
            </Box>

            <VStack space="xs" flex={1}>
                <Heading size="sm">{title}</Heading>
                <Heading size="xs" color="$trueGray500">
                    {description}
                </Heading>
            </VStack>

            <Button variant="solid" size="xs">
                <ButtonText>더보기</ButtonText>
            </Button>
        </HStack>
    );
}
