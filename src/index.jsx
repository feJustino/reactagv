import React from 'react'
import { render } from 'react-dom'
import Classcomponent from './classComponent'

render(
  <div>
    <Classcomponent label='Contador' initialValue={10} />
  </div>
  , document.getElementById('app'))
