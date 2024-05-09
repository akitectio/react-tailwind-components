import React, { ReactNode, useState } from 'react'

interface AccordionProps {
  children: ReactNode
  title?: string
}

const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full max-w-md mx-auto'>
      <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6 flex justify-between'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            {title}
          </h3>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Open'}
          </button>
        </div>
        {isOpen && <div className='px-4 py-5 sm:p-6'>{children}</div>}
      </div>
    </div>
  )
}

export default Accordion
