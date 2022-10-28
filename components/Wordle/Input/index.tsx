import React, { Fragment, useMemo } from 'react'
import { motion } from 'framer-motion'
import WordleGuess from '../Guess';

const RE_DIGIT = new RegExp(/^[a-z]{1}$/);

const Input = ({ value, valueLength, onChange, enabled, onSubmit, rowIndex }: any) => {

  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push('');
      }
    }

    return items;
  }, [value, valueLength]);

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value;
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== '') {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : '';

    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1);

    onChange(newValue);

    if (!isTargetValueDigit) {
      return;
    }

    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (e.key === "Enter" && value.length === valueLength) {
      return onSubmit()
    }

    if (e.key !== 'Backspace' || target.value !== '') {
      return;
    }

    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  return (
    <div className='flex gap-3 justify-center items-center' >
      {valueItems.map((digit, idx) => (
        <motion.input
          key={idx}
          type="text"
          pattern="\d{1}"
          inputMode="text"
          maxLength={valueLength}
          value={enabled ? digit : ""}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.18 + 0.06 * rowIndex + 0.05 * idx } }}
          whileFocus={{ scale: 1.09 }}
          className="w-14 h-14 bg-transparent outline outline-1 outline-neutral-800 rounded-md text-center uppercase font-bold  "
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
        />
      ))}
    </div>
  )
}

export default Input