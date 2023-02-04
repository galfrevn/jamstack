import React from 'react'

const Container = ({ children }: any) => {
  return (
    <main
      className="pt-48 relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 text-lg text-white xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] 
       xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
    >
      {children}
    </main>
  )
}

export default Container