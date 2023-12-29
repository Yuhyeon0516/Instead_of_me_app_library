import React from "react";
import {IButtonItem} from "./type";
import {Button, ButtonText} from "@gluestack-ui/themed";

export default function ButtonItem({
    title,
    onPressButton,
    isSelected,
}: IButtonItem) {
    return (
        <Button
            variant="outline"
            size="lg"
            borderColor={isSelected ? "$blue500" : "$trueGray400"}
            bgColor={isSelected ? "$blue50" : "transparent"}
            onPress={onPressButton}>
            <ButtonText color={isSelected ? "$blue500" : "$trueGray400"}>
                {title}
            </ButtonText>
        </Button>
    );
}
