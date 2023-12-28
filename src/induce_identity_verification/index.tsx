import {SafeAreaView} from "react-native";
import React from "react";
import {
    Box,
    Button,
    ButtonText,
    Center,
    Heading,
    Icon,
} from "@gluestack-ui/themed";
import {Lock, X} from "lucide-react-native";

export default function InduceIdentityVerification() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Box w={"$full"} px={20} py={5}>
                <Icon as={X} color="black" size="xl" />
            </Box>
            <Center flex={1} gap={25}>
                <Box p={30} bgColor="$blue400" borderRadius={"$full"}>
                    <Lock color="white" size={60} />
                </Box>

                <Box alignItems="center">
                    <Heading>서비스 이용을 위해</Heading>
                    <Heading>본인인증을 진행해주세요.</Heading>
                </Box>

                <Heading color="$trueGray400" size="sm">
                    딱 한번만 인증하면 끝나요
                </Heading>

                <Button variant="outline" size="xl">
                    <ButtonText>본인 인증하기</ButtonText>
                </Button>
            </Center>
        </SafeAreaView>
    );
}
