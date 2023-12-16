"use client";
import React ,{useState, useEffect}from 'react'
// import "@/app/globals.css"

function TypeWriter() {
    const words=['Student', 'Engineer', 'Developer', 'Designer']

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');
    const [changeWord, setChangeWord] = useState(false);
    


    useEffect(() => {
        if(changeWord===true){
            setCurrentWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
        }
        setChangeWord(false)
        
    }, [changeWord]);

    useEffect(() => {
        const word = words[currentWordIndex];
        let currentWord = '';
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            currentWord += word[currentIndex];
            setCurrentWord(currentWord);
            currentIndex++;
            if (currentIndex === word.length) {
                clearInterval(typingInterval);
                setTimeout(()=>{
                    let deleteIndex=currentIndex-1;
                    const deleteInterval=setInterval(()=>{
                        currentWord=currentWord.slice(0,deleteIndex);
                        setCurrentWord(currentWord);
                        deleteIndex--;
                        if (deleteIndex==-1){
                            clearInterval(deleteInterval)
                            setChangeWord(true)
                        }
                    },200)
                },2000)
            }

        }, 200);

        return () => {
        clearInterval(typingInterval);
        };
    }, [currentWordIndex]);
   

    return (
    <div className=' text-6xl flex'>
        <span>{currentWord}</span><div className='bg-Custom-red w-1 animate-blink-fast'></div>
    </div>
    );
}

export default TypeWriter