import type { Toast } from 'react-hot-toast'

const WordleAlert = (t: Toast) => {
  return (
    <div
      className={
        `${t.visible ? 'animate-enter' : 'animate-leave'} 
        max-w-xs w-full bg-transparent outline outline-1 outline-neutral-800 bg-[#161213] rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`
      }
    >
      <div className="flex-1 w-0 p-3">
        <div className="flex items-start">
          <div className="ml-2 flex-1">
            <p className="text-sm font-medium text-white">
              Invalid entry 🤨
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Hey, that word doesn&apos;t exist in my dictionary.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WordleAlert