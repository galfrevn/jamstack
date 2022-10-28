import { Fragment, useState } from 'react'
import WordleGuess from '../Guess';
import Input from '../Input';

interface WordleScreen {
  dictionary: string[];
  answer: string;
}

const Screen = ({ dictionary, answer }: WordleScreen) => {

  /* WORDLE PROPERTIES (Amount of rows) */
  const [wordleProps, setWordleProps] = useState({ rows: 6 });
  const [wordAttemp, setWordAttemp] = useState(0);

  const [currentWord, setCurrentWord] = useState("");
  const [attempsHistory, setAttempsHistory] = useState<string[]>([])

  const onChange = (value: string) => setCurrentWord(value);
  const onSubmit = () => {
    setAttempsHistory([...attempsHistory, currentWord]);
    setWordAttemp(wordAttemp + 1);
    setCurrentWord("");
  };

  console.log(wordAttemp)

  return (
    <div className='flex flex-col gap-3'>
      {[...Array(wordleProps.rows)].map((row, rowIndex) => {

        const hasAlreadyAnswered = wordAttemp >= rowIndex && attempsHistory[rowIndex]
        console.log(hasAlreadyAnswered)

        return (
          <Fragment>
            {hasAlreadyAnswered ?
              <WordleGuess value={attempsHistory[rowIndex]} correctWord={answer}  />
              :
              <Input
                key={`wordle-input-${rowIndex}`}
                rowIndex={rowIndex}
                valueLength={5}
                value={currentWord}
                onChange={onChange}
                onSubmit={onSubmit}
                enabled={wordAttemp === rowIndex}
              />
            }
          </Fragment>
        )
      })}
    </div>
  )
}

export default Screen;