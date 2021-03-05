import React from 'react';
import axios from 'axios';
import ListContainer from './ListComponent.jsx';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      searchTerm: ''
    };
    this.editSearchTerm = this.editSearchTerm.bind(this);
  }

  componentDidMount() {  // its Component Life Cycle MEthod Of React
    // axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
    axios.get(`http://localhost:7000/users/list`)
      .then(res => {
          console.log(res);
        const posts = res.data.map(obj => obj);
        this.setState({ posts });
      });
  }

  editSearchTerm(e) {
      this.setState({searchTerm: e.target.value});
  }

  dynamicSerach() {
      return this.state.posts.filter((e) => {
        return e.last_name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
    });
  }

  render() {
    return (
      <div>
        <h1>Rest Call</h1>
        <input type="text" value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder="Search for a name"></input>
        <ListContainer posts={this.dynamicSerach()} />
      </div>
    );
  }
}

export default FetchDemo;



