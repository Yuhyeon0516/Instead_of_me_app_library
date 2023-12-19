import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import Header from "../common/Header";
import {Center, Heading, VStack} from "@gluestack-ui/themed";
import GuideItem from "./GuideItem";

export default function InformationGuide() {
    return (
        <SafeAreaView>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="정보 안내" />
                <Center py={20}>
                    <Heading size="xl">100% 무료 국비지원</Heading>
                    <Heading size="xl">전문가 교육으로 시작하세요.</Heading>
                    <Heading my={30}>
                        고용노동부 X{" "}
                        <Heading color="$blue500">Instead of me</Heading>
                    </Heading>
                </Center>
                <VStack space="xl" alignItems="center">
                    <GuideItem
                        difficulty="기본"
                        title="안드로이드 전문가 기본 과정"
                        description="기초 교육 자신있게 시작하세요!"
                        bgColor="$blue400"
                    />
                    <GuideItem
                        difficulty="심화"
                        title="안드로이드 전문가 심화 과정"
                        description="자신만의 앱을 출시까지"
                        bgColor="$tertiary400"
                    />
                    <GuideItem
                        difficulty="기본"
                        title="유아 교육 기본 과정"
                        description="요즘 교육법부터 부모 소통법까지"
                        bgColor="$blue400"
                    />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
}
