import type { FC } from 'react'
import { motion } from 'framer-motion'

interface WordleGuessProps {
  // Guessed value
  value: string,
  correctWord: string,
}

const WordleGuess: FC<WordleGuessProps> = ({ value, correctWord }) => {

  const guessLetters = value.split("");
  const correctWordLetters = correctWord.split("");

  const incorrectLetters = guessLetters.filter(letter => !correctWordLetters.includes(letter))
  const correctLetters = guessLetters.filter(letter => correctWordLetters.includes(letter));

  const isInCorrectPlace = (digit: string, index: number) => {
    if (correctLetters.includes(digit) && correctWordLetters[index] === digit) return true;
    return false;
  }

  return (
    <div className='flex gap-3 justify-center items-center' >
      {guessLetters.map((digit, idx) => {

        const isIncorrect = incorrectLetters.includes(digit);
        const isCorrect = isInCorrectPlace(digit, idx);

        return (
          <div key={`guess-${idx}-input`} className="z-10 w-14 h-14 text-[#231F20] bg-transparent outline outline-1 outline-neutral-800 overflow-hidden rounded-md flex items-center align-center">
            <motion.input
              disabled
              readOnly
              key={idx}
              type="text"
              pattern="\d{1}"
              inputMode="text"
              maxLength={1}
              value={digit}
              initial={{ y: 80 }}
              animate={{ y: 0, transition: { delay: 0.18 + 0.06 * idx } }}
              className={`
                w-14 h-14 bg-transparent rounded-md text-center uppercase font-bold
                ${isIncorrect ? "bg-neutral-900 opacity-20 text-[#F9F4DA]" : isCorrect ? "bg-green-500" : "bg-[#FCBA28]"}
              `}
            />
          </div>
        )
      })}
    </div>
  )
}

export default WordleGuess