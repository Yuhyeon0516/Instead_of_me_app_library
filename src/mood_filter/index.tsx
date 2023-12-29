import React, {useState} from "react";
import {FlatList, SafeAreaView} from "react-native";
import Header from "../common/Header";
import ButtonItem from "./ButtonItem";
import {Button, ButtonText, HStack} from "@gluestack-ui/themed";

const moodList = [
    "데이트",
    "비즈니스 미팅",
    "기념일",
    "단체회식",
    "가족모임",
    "뷰맛집",
    "상견례",
    "조용한",
    "모던한",
    "전통적인",
];

export default function MoodFilter() {
    const [selectedButton, setSelectedButton] = useState<number[]>([]);

    function onPressButton(index: number) {
        if (selectedButton.indexOf(index) < 0) {
            setSelectedButton(prev => [...prev, index]);
        } else {
            setSelectedButton(prev => prev.filter(item => item !== index));
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="분위기" />
            <FlatList
                data={moodList}
                numColumns={3}
                style={{paddingHorizontal: 20, paddingVertical: 30, flex: 1}}
                contentContainerStyle={{gap: 15}}
                columnWrapperStyle={{gap: 15}}
                renderItem={({item, index}) => (
                    <ButtonItem
                        title={item}
                        onPressButton={() => onPressButton(index)}
                        isSelected={selectedButton.indexOf(index) >= 0}
                    />
                )}
            />
            <HStack w={"$full"} px={20} space="md">
                <Button variant="outline" size="xl">
                    <ButtonText>이전</ButtonText>
                </Button>
                <Button size="xl" flex={1}>
                    <ButtonText>{selectedButton.length}개 선택</ButtonText>
                </Button>
            </HStack>
        </SafeAreaView>
    );
}
