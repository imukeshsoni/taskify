import React from 'react'
import './styles.css'

const InputField = () => {
  return (
    <form className='input'>
        <input type="input" placeholder='Enter a task' className='input_box' />
        <button type="submit" className='input_submit'>Go</button>
    </form>
  )
}

export default InputField