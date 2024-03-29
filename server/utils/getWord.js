const getWord = (allWords) => {
    return new Promise((resolve, reject) =>{
        var timeStamp = new Date()
        allWordsArray = allWords.map((i)=>
            {return {word:i.word, 
                    audioFileName:process.env.AUDIO_DOMAIN + i.audioFileName,
                    timeStamp:timeStamp}})
        
        if(allWords.length==0){
            // console.log('end of assessment')
            reject('spellingTestComplete')
        }
        else{
            // console.log('got these words ' + JSON.stringify(allWordsArray))
            const wordNumber = Math.floor((Math.random() * allWordsArray.length));    
            resolve(allWordsArray[wordNumber])
        }
        
        
        
    }
)} 

module.exports = getWord