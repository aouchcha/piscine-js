function pronoun(str) {
    const newObj = {}
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
    const allWords = str.toLowerCase().split(/\s+/)

    for (let i = 0; i < allWords.length; i++) {
        const currentWord = allWords[i].replace(/[^a-z]/g, '')
        if (pronouns.includes(currentWord)) {
            if (!newObj[currentWord]) {
                newObj[currentWord] = { word: [], count: 0 }
            }
            newObj[currentWord].count++
            if (i < allWords.length - 1) {
                const nextWord = allWords[i+1].replace(/[^a-z]/g, '')
                if (nextWord && !pronouns.includes(nextWord)) {
                    newObj[currentWord].word.push(nextWord)
                }
            }
        }
    }
    return newObj
}