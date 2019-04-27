import React from 'react';

class Error extends React.Component {
  render() {
    return (
      <div>
        <h1
          style={{
            paddingTop: '20px',
            textAlign: 'center',
            marginBottom: 0,
          }}
        >Error 404</h1>
        <p
          style={{
            marginTop: 10,
            fontSize: '2rem',
            textAlign: 'center',
          }}
        >:'(</p>
      </div>
    );
  }
}

export default Error;