import React from "react";

let CustomButton = ({onPress}) => {
    return (
        <button type="button" onClick={onPress}>
            Click on me
        </button>
    );
};

let App = () => {
    let handleEvent = () => {
        alert("DevCodeCamp");
    };
    return <CustomButton onPress={handleEvent} />;
};