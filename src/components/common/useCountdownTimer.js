import { useState, useEffect } from 'react';

const useCountdownTimer = (ccyy, mm, dd) => {
    const [remTime, setRemTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    // Set the date we're counting down to
    const startDate = new Date(ccyy, mm - 1, dd).getTime();

    let interval;

    useEffect(() => {
        tick();

        return () => {
            clearInterval(interval);
        }
    }, [remTime, ccyy, mm, dd]);

    const tick = () => {
        interval = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = now - startDate;

            // Time calculations for days, hours, minutes and seconds
            const days = -1 * Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = -1 * Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = -1 * Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = -1 * Math.floor((distance % (1000 * 60)) / 1000);
            const remTime = { days, hours, minutes, seconds };

            setRemTime(remTime);

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);
    }

    return remTime;
}

export default useCountdownTimer;