import type { NextPage } from 'next'
import React, { Fragment } from 'react'

import Container from 'components/Container'
import Screen from '@/wordle/Screen'

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

  return (
    <Fragment>
      <Container>
        <Screen dictionary={words} answer={answer} />
      </Container>
    </Fragment>
  )
}

export default Wordle;

/**
 * Make a fetch to Backend API where I
 * wrote a file with +13k of possible words.
 * Then choose a random one from the array to be the answer to the game
 * @author Valentín Galfré
 */
Wordle.getInitialProps = async (): Promise<WordleProps> => {
  const { data } =
    await fetch('https://portfolio-galfrevn.vercel.app/api/wordle/dictionary')
      .then(res => res.json());
  const { dictionary, wordleAnswer } = data;

  return { words: dictionary, answer: wordleAnswer }
}

