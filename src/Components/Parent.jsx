import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Counter from './Counter';

const Parent = () => {
  const { count} = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <div className='mx-auto'>
        <div className=''>
          <div className='max-w-xs p-6 rounded-md border-orange-500 shadow-lg'>
            <div className='text-black'>
              <h2 className='text-base mb-2'>Parent</h2>
              <div>
                <span className='text-3xl'>{count}</span>
              </div>
              <Counter></Counter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
