import { useState, useEffect } from 'react';

const useTimer = initialTimer => {
    const [timer, setTimer] = useState(initialTimer);
    const [isActive, setIsActive] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [intervalID, setIntervalID] = useState(0);
    const [buttonText, setButtonText] = useState("Start");
    const [formattedTime, setFormattedTime] = useState("00:00:00");

    const handleTimer = () => {
        isActive ? handleStart() : isPaused ? handleResume() : handlePause();
    };

    const handleStart = () => {
        setButtonText("Pause");
        if (buttonText === "Pause") {
            handlePause();
            return;
        }
        const intervalId = setInterval(() => {
            setTimer(seconds => seconds + 1);
        }, 1000);
        setIntervalID(intervalId);
    };

    const handlePause = () => {
        clearInterval(intervalID);
        setButtonText("Resume");
        setIsActive(false);
        setIsPaused(true);
    };

    const handleResume = () => {
        setIsActive(true);
        setButtonText("Pause");
        setIsPaused(false);
        const intervalId = setInterval(() => {
            setTimer(seconds => seconds + 1);
        }, 1000);
        setIntervalID(intervalId);
    };

    const handleReset = () => {
        clearInterval(intervalID);
        setButtonText("Start")
        setTimer(0);
        setIsActive(true);
    };

    useEffect(() => {
        const getLast2Digits = str => `0${str}`.slice(-2);
        const hour = getLast2Digits(Math.floor(timer / 3600));
        const minutes = getLast2Digits(Math.floor((timer - hour * 3600) / 60));
        const seconds = getLast2Digits((timer - hour * 3600 - minutes * 60));
        setFormattedTime(`${hour}:${minutes}:${seconds}`);
    }, [timer]); 

    return {buttonText, formattedTime, handleTimer, handleReset};
};

export default useTimer;