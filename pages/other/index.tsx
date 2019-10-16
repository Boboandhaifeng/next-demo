import React from 'react'
import { connect, Dispatch } from 'react-redux'

import { startClock, tickClock } from '../../redux/actions'
import Page from '../../components/page'

export interface  Iprops {
  dispatch: Dispatch
}

class Other extends React.Component <Iprops, {}> {
  static async getInitialProps (props) {
    console.log('----', props.isServer)
    const { store, isServer } = props
    store.dispatch(tickClock(isServer))
    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return <Page title='Other Page' linkTo='/' NavigateTo='Index Page' />
  }
}

export default connect()(Other)
