import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ipoActions from '../actions/actioncreators';

class IpoWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ border: '2px solid cyan', height: '100%' }}>
        <Link to="/dashboard/home">to home</Link>
        <Link to="/login">to login</Link>
        <h1>Hello world! IPO</h1>
        <p style={{ color: 'white'}}>{this.props.testState}</p>
        <button onClick={() => this.props.testAction('funny bear')}>Click Me!</button>
      </div>
    )
  }
}

const mapStateToProps = ({ Ipo }) => {
  return {
    testState: Ipo.tree
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...ipoActions}, dispatch);
};

const Ipo = connect(mapStateToProps, mapDispatchToProps)(IpoWrapper);

export default Ipo;
