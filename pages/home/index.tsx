import React from 'react'
import { Button } from 'antd'
import './index.less'

export default class Home extends React.PureComponent{
  render() {
    return (
      <div>
        <div className='test'>home</div>
        <Button type='primary'>2222</Button>
      </div>
    )
  }
}