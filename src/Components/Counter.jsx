import React, { useReducer } from 'react';

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === 'INCREMENT') {
      return state + action.payload.count;
    } else if (action.type === 'DECREMENT') {
      return state - action.payload.count;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className='w-screen h-fit mt-64 text-center'>
        <div className='flex items-center justify-center'>
          <div className='max-w-xs p-6 rounded-md border-orange-500 shadow-lg'>
            <div className='text-black'>
              {/* <h2 className='text-base mb-2'>Child</h2> */}
              <div>
                <span className='text-4xl font-bold mb-8'>{state}</span>
              </div>
              <div className='mt-4'>
                <button
                  className='bg-teal-500 text-white font-semibold p-2 rounded-md'
                  onClick={() =>
                    dispatch({ type: 'DECREMENT', payload: { count: 5 } })
                  }
                >
                  Discernment
                </button>
                <button
                  className='bg-cyan-500 ml-5 text-white font-semibold p-2 rounded-md'
                  onClick={() =>
                    dispatch({ type: 'INCREMENT', payload: { count: 5 } })
                  }
                >
                  Incriminate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
