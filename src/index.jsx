import React from 'react'
import { render } from 'react-dom'
import Field from './field'

render(
  <div>
    <Field initialValue='teste' />
  </div>
  , document.getElementById('app'))
