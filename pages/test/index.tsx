import React, {Component} from 'react'
import {connect} from 'react-redux'

export interface  Iprops {
  staticData: string
}

class ExamplePage extends Component <Iprops, {}> {
  static async getInitialProps({store}) {
    store.dispatch({type: 'SOME_ASYNC_ACTION_REQUEST'})
    return {staticData: 'Hello world!'}
  }
 
  render() {
    return <div>{this.props.staticData}</div>
  }
}
 
export default connect(state => state)(ExamplePage)