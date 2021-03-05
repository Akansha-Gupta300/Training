import React from 'react';

class ListContainer extends React.Component {
    render() {
        return (
          <div>
            <h1>Search</h1>
            <ul>
              {this.props.posts.map(post =>
                <li key={post.id}>{post.last_name}</li>
              )}
            </ul>
          </div>
        );
      }
}

export default ListContainer;

