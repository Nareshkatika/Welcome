// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {open: true}

  renderAuthButton = () => {
    const {open} = this.state
    if (open === true) {
      return <button className="button">Subscribe</button>
    }
    return <button className="button">Subscribed</button>
  }

  render() {
    return (
      <div className="bg-img">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you!Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default Welcome
