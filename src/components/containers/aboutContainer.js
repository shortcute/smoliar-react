import React from 'react';
import AboutPage from '../views/AboutPage';
import client from '../../config';

class aboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    client.getEntries({
      content_type: 'aboutMe',
    })
      .then(response => this.setState({
        data: response.items[0].fields,
      })
    )
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    return (
      <AboutPage data={this.state.data} />
    );
  }
}

export default aboutContainer;
