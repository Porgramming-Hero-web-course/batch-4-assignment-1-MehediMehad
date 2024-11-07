{
  function countWordOccurrences(sentence: string, word: string): number {

    // Convert sentence and word to lowercase 
    const sentenceLower: string = sentence.toLowerCase()
    const wordLower: string = word.toLowerCase()

    // Split the sentence into words []
    const partWord: string[] = sentenceLower.split(" ");
    
    // Filter the words in the sentence and return the number of exact matches with the target word
    const count: number = partWord.filter((w) => w === wordLower).length
    console.log(count)

    return count
  }



  countWordOccurrences("TypeScript is great. I love TypeScript", "typescript");



}
