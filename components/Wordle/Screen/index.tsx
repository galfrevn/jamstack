import { Fragment, useState } from 'react'
import { useWindowSize } from 'hooks';
import toast from 'react-hot-toast';

/* Wordle components */
import WordleAlert from '@/wordle/Alert';
import WordleGuess from '@/wordle/Guess';
import Input from '@/wordle/Input';

import Confetti from 'react-confetti'

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
    <div className='flex flex-col gap-3'>
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