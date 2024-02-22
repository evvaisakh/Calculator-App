import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState('')

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value))
  }

  const clearScreen = () => {
    setResult('')
  }

  const removeItem = () => {
    setResult(result.slice(0, -1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult('Syntax Error')
    }
  }

  return (
    <>
      <div className='bg-neutral-200 text-white w-screen h-screen flex justify-center items-center'>
        <div className="main w-64 h-auto bg-gray-300 rounded-2xl shadow-xl border-4 border-gray-900">
          <div className="screen p-2">
            <div className="brand flex justify-between p-1 text-gray-500">
              <h1 className=' text-gray-900 text-xl font-bold'>CASIO&reg;</h1>
              <button className="bg-slate-800 h-9"></button>
            </div>
            <p className='text-black text-right pb-1 pe-10'>TWO WAY POWER</p>
            <input type="text" value={result} className='text-white w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-neutral-600 px-1 rounded-lg bg-slate-400 text-4xl pt-3 outline-none text-right' placeholder='0' readOnly />
          </div>
          <div className="keyboard">
            <div className="flex justify-between m-2">
              <button value="AC" onClick={clearScreen} className='bg-yellow-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium flex justify-center items-center outline-none'>AC</button>
              <button value="DEL" onClick={removeItem} className='bg-yellow-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium flex justify-center items-center outline-none'>DEL</button>
              <button value="%" onClick={clickHandle} className='bg-white shadow-md w-12 h-12 rounded-lg text-center text-orange-400 font-medium flex justify-center items-center outline-none'>%</button>
              <button value="/" onClick={clickHandle} className='bg-white shadow-md w-12 h-12 rounded-lg text-center text-orange-400 font-medium flex justify-center items-center outline-none'>/</button>
            </div>
            <div className="flex justify-between m-2">
              <button value="7" onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>7</button>
              <button value="8" onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>8</button>
              <button value="9" onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>9</button>
              <button value="*" onClick={clickHandle} className='bg-white shadow-md w-12 h-12 rounded-lg text-center text-orange-400 font-medium flex justify-center items-center outline-none'>*</button>
            </div>
            <div className="flex justify-between m-2">
              <button value="4" onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>4</button>
              <button value="5" onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>5</button>
              <button value="6" onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>6</button>
              <button value="-" onClick={clickHandle} className='bg-white shadow-md w-12 h-12 rounded-lg text-center text-orange-400 font-medium flex justify-center items-center outline-none'>-</button>
            </div>
            <div className="flex justify-between m-2">
              <button value="1" onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>1</button>
              <button value="2" onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>2</button>
              <button value="3" onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>3</button>
              <button value="+" onClick={clickHandle} className='bg-white shadow-md w-12 h-12 rounded-lg text-center text-orange-400 font-medium flex justify-center items-center outline-none'>+</button>
            </div>
            <div className="flex justify-between m-2">
              <button value="0" onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>0</button>
              <button value="." onClick={clickHandle} className='bg-orange-400 shadow-md w-12 h-12 rounded-lg text-center text-white font-medium flex justify-center items-center outline-none'>.</button>
              <button value="=" onClick={calculate} className='bg-white shadow-md w-28 h-12 rounded-lg text-center text-orange-400 font-medium flex justify-center items-center outline-none'>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
