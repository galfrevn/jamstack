import type { NextApiResponse, NextApiRequest } from "next";
import data from './data.json';

export default function handler(_: NextApiRequest, res: NextApiResponse) {

  /* Get a random word from the pool to be the answer */
  const { words } = data;
  const answer = words[Math.floor(Math.random() * (words.length - 0 + 1) + 0)];
  const DATA = {
    dictionary: words,
    wordleAnswer: answer,
  };

  res.status(200).send({ data: DATA });
}
