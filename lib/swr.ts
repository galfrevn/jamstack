interface SWRError extends Error {
  info: unknown;
  status: number;
}

export const fetcher = async (url: string) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error(
      'An error occurred while fetching the data.'
    ) as SWRError;
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export const postFetcher = async (url: string) => {
  const res = await fetch(url, { method: 'POST' });

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error(
      'An error occurred while fetching the data.'
    ) as SWRError;
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
