import type { NextPage } from 'next'
import Footer from 'components/Footer'
import React, { Fragment } from 'react'
import Container from 'components/Container'
import Screen from 'components/Wordle/Screen'


interface WordleProps {
  words: string[];
  answer: string;
}

/**
 * WORDLE GAME CLONE 😉
 * Made with NextJS, TailwindCSS & Framer motion
 * @returns FUN!
 */
const Wordle: NextPage<WordleProps> = ({ words, answer }) => {
  
  console.log(words)

  return (
    <Fragment>
      <Container>
        <Screen dictionary={words} answer={answer} />
        <Footer />
      </Container>
    </Fragment>
  )
}

export default Wordle;

interface DATAMUSE_WORD { word: string }
/**
 * Make a fetch to DATAMUSE API, to get 600 words 
 * of 5 words length each one. 
 * Then choose a random one from the array to be the answer to the game
 * @returns {Promise<WordleProps>} List of 600 words and a random answer
 * @author Valentín Galfré
 */
Wordle.getInitialProps = async (): Promise<WordleProps> => {
  const possibleWords =
    await fetch('https://api.datamuse.com/words?sp=?????&topics=javascript&max=600&')
      .then(res => res.json());

  const arrayOfWords = possibleWords.map((possibleWord: DATAMUSE_WORD) => possibleWord.word)
  const answerWord = arrayOfWords[Math.floor(Math.random() * (arrayOfWords.length - 0 + 1) + 0)];

  return { words: arrayOfWords, answer: answerWord }
}

