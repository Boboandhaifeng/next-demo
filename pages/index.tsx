import React from 'react'
import Link from 'next/link'
import { connect, Dispatch } from 'react-redux'
import { Button } from 'antd'

import { loadData, startClock, tickClock } from '../redux/actions'
import Page from '../components/page'

export interface  Iprops {
  dispatch: Dispatch
}

class Index extends React.Component<Iprops, {} > {
  static async getInitialProps (props) {
    const { store, isServer } = props
    store.dispatch(tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return (
      <React.Fragment>
        <Link href="/home">
          <Button type='primary'>go home</Button>
        </Link>
        <Page title='Index Page' linkTo='/other' NavigateTo='Other Page' />
      </React.Fragment>
    )
  }
}

export default connect()(Index)
