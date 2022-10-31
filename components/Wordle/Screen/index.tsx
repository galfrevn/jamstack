import { Fragment, useState } from 'react'
import { useWindowSize } from 'hooks';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion'

/* Wordle components */
import WordleAlert from '@/wordle/Alert';
import WordleGuess from '@/wordle/Guess';
import Input from '@/wordle/Input';

import Confetti from 'react-confetti'
import { CornerDownRight } from 'react-feather';

interface WordleScreen {
  dictionary: string[];
  answer: string;
}

const Screen = ({ dictionary, answer }: WordleScreen) => {
  /* WINNER STATE */
  const { width, height } = useWindowSize();
  const [isWinner, setIsWinner] = useState(false);

  /* WORDLE PROPERTIES (Amount of rows) */
  const [wordleProps, _] = useState({ rows: 6 });
  const [wordAttemp, setWordAttemp] = useState(0);

  const [currentWord, setCurrentWord] = useState("");
  const [attempsHistory, setAttempsHistory] = useState<string[]>([]);

  const onChange = (value: string) => setCurrentWord(value);
  const onSubmit = () => {
    /* Check if the word is included in the dictionary */
    if (!dictionary.includes(currentWord))
      return toast.custom((t) => <WordleAlert {...t} />)

    if (currentWord === answer)
      setIsWinner(true);
    /* If is not winner, save word to history an reset current word state */
    setAttempsHistory([...attempsHistory, currentWord]);
    setWordAttemp(wordAttemp + 1);
    setCurrentWord("");
  };

  return (
    <div className='flex flex-col gap-3 items-center mb-8' >
      {[...Array(wordleProps.rows)].map((_, rowIndex) => {
        const hasAlreadyAnswered = wordAttemp >= rowIndex && attempsHistory[rowIndex]
        return (
          <Fragment key={`wordle-input-${rowIndex}-fragment`} >
            {hasAlreadyAnswered ?
              <WordleGuess
                value={attempsHistory[rowIndex]}
                correctWord={answer}
              />
              :
              <Input
                key={`wordle-input-${rowIndex}`}
                rowIndex={rowIndex}
                valueLength={5}
                value={currentWord}
                onChange={onChange}
                onSubmit={onSubmit}
                enabled={wordAttemp === rowIndex && !isWinner}
              />
            }
          </Fragment>
        )
      })}
      <motion.a
        key="button-about"
        className="group cursor-pointer focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCBA28]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
      >
        <div className="sm:flex sm:items-center sm:space-x-2">
          <button className="mb-2 flex justify-center sm:mb-0 sm:block" onClick={onSubmit} >
            <div className="text-[#231F20] text-sm font-semibold h-13 w-13 rounded-lg p-3 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-active:translate-y-1" style={{ backgroundColor: "#f9f4da" }} >
              Guess
            </div>
          </button>
        </div>
      </motion.a>
      {/* A confetti shower when the match ends */}
      {isWinner &&
        <Confetti
          width={width}
          height={height}
          gravity={0.2}
          numberOfPieces={100}
        />
      }
    </div>
  )
}

export default Screen;