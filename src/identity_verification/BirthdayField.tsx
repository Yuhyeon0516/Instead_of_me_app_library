import React, {useState} from "react";
import {
    Button,
    ButtonIcon,
    ButtonText,
    Heading,
    Pressable,
    VStack,
} from "@gluestack-ui/themed";
import DatePicker from "react-native-date-picker";

import {Calendar} from "lucide-react-native";
import dayjs from "dayjs";

export default function BirthdayField() {
    const [birthday, setBirthday] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    function onPressCalendar() {
        setIsOpen(true);
    }

    return (
        <>
            <VStack space="xs">
                <Heading size="md">생년월일</Heading>

                <Pressable>
                    <Button
                        variant="outline"
                        borderColor="$trueGray300"
                        size="xl"
                        onPress={onPressCalendar}
                        px={15}>
                        <ButtonText flex={1} color="black" fontWeight="normal">
                            {birthday
                                ? dayjs(birthday).format("YYYY년 MM월 DD일")
                                : ""}
                        </ButtonText>
                        <ButtonIcon as={Calendar} color="black" />
                    </Button>
                </Pressable>
            </VStack>
            <DatePicker
                modal
                open={isOpen}
                date={birthday ?? new Date()}
                locale="ko-KR"
                mode="date"
                onConfirm={date => {
                    setIsOpen(false);
                    setBirthday(date);
                }}
                onCancel={() => {
                    setIsOpen(false);
                }}
            />
        </>
    );
}
