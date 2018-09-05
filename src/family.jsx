import React from 'react'
import { childrenWP } from '../utils/reactUtils'

export default props => (
  <div>
    <h1>Família</h1>
    {childrenWP(props.children, props)}
  </div>
)
