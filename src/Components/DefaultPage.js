import React, { useState, useEffect,useRef } from 'react';
import './CSS_Files/Bday.css';
import EmailForm from './EmailForm_Send';
import HbdSong from './files/Hbd_song.mp3';

const DefaultPage = ({ targetDate }) => {
    let heartEyes="😍";
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <>
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
            </>
        );
    });
    const [className, setClassName] = useState("defaultBg");


    useEffect(() => {
      if (timerComponents.length) {
        setClassName("defaultBg");
      } else {
        setClassName("happyBdayBg");
      }
    }, [timerComponents.length]);

    const audioRef = useRef(null); // Reference for the audio element
    const [isMusicPlaying, setIsMusicPlaying] = useState(false); // State to track if music is playing

    // Effect to control audio playback based on timerComponents.length
    const handleUserInteraction = () => {
        if (!isMusicPlaying && timerComponents.length === 0) {
          audioRef.current.play().catch(error => console.log(error));
          setIsMusicPlaying(true);
        }
      };
    
      // Effect to add event listener for user interaction
      useEffect(() => {
        window.addEventListener('click', handleUserInteraction);
        return () => {
          window.removeEventListener('click', handleUserInteraction);
        };
      }, [isMusicPlaying, timerComponents.length]);
  

    return (
        <div className={`${className} defaultpage`}> 
        
        {timerComponents.length!=0 &&
        <div>
        <h1>Countdown to ayushi birth day 🤩🤩</h1>
        
        </div>
        }
            {/* <button>hello</button>
            <EmailForm></EmailForm> */}
           <div>
           {timerComponents.length ? timerComponents : <div>       
            <EmailForm></EmailForm>
            <audio ref={audioRef} src={HbdSong} loop />
           </div>
           }
           </div>
        </div>
    );
};

export default DefaultPage;
