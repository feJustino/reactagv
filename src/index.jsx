import React from 'react'
import { render } from 'react-dom'
import Family from './family'
import Member from './member'

render(
  <div>
    <Family lastname={'Justino'}>
      <Member name={'Felipe'} />
      <Member name={'Theo'} />
    </Family>
    <Family lastname={'Mendonça'}>
      <Member name={'Bianca'} />
      <Member name={'Tita'} />
    </Family>
  </div>
  , document.getElementById('app'))
