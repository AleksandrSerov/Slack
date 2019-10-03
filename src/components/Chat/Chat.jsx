import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Chat extends Component {
  render() {
    return (
      <>
        <div className="chatWindow" style={{ height: '80%' }}>
          messages
        </div>
        <form
          className="form-inline col"
          id="mainForm"
          style={{ height: '20%' }}
        >
          <div className="input-group col">
            <input
              className="form-control border-right-0 "
              placeholder="Enter message"
              id="formInput"
              required
            />
            <button
              className="btn btn-primary border-left-0"
              id="searchButton"
              type="submit"
            >
              Read
            </button>
          </div>
        </form>
      </>
    );
  }
}
