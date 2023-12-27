import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import {
    Box,
    Button,
    ButtonText,
    Heading,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import NameField from "./NameField";
import BirthdayField from "./BirthdayField";
import PhoneNumberField from "./PhoneNumberField";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function IdentityVerification() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="본인 인증" />
            <VStack px={20} py={30} space="xl" flex={1}>
                <Box>
                    <Heading size="xl">본인 인증을 위해</Heading>
                    <Heading size="xl">정보를 입력해주세요</Heading>
                </Box>

                <Box>
                    <Text>회원가입을 하려면 본인 확인이 필요해요</Text>
                </Box>

                <NameField />

                <BirthdayField />

                <PhoneNumberField />

                <Box>
                    <Text>
                        고객님의 개인정보는 암호화되어 최고 수준의 보안 기술로
                        안전하게 저장되고 관리합니다.
                    </Text>
                </Box>
            </VStack>

            <Button
                size="xl"
                bottom={0 - safeAreaInsets.bottom}
                h={80}
                pb={safeAreaInsets.bottom}>
                <ButtonText>다음</ButtonText>
            </Button>
        </SafeAreaView>
    );
}
