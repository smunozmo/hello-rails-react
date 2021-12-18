import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_GREETING_REQUEST = "GET_GREETING_REQUEST";
const GET_GREETING_SUCCESS = "GET_GREETING_SUCCESS";

const getGreeting = () => {
  return (dispatch) => {
    dispatch({ type: GET_GREETING_REQUEST });
    return fetch("api/v1/greetings")
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingsSuccess(json)))
      .catch((error) => console.log(error));
  };
};

export const getGreetingsSuccess = (json) => {
  return {
    type: GET_GREETING_SUCCESS,
    json,
  };
};

const Greeting = ({ greetings, getGreeting }) => {
  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <div>
      <h1 style={{ margin: "auto", width: "80%", textAlign: "center" }}>
        {greetings.greeting}
      </h1>
    </div>
  );
};

Greeting.propTypes = {
  greeting: PropTypes.string,
};

const structuredSelector = createStructuredSelector({
  greetings: (state) => state.greetings,
});

const mapDispatchToProps = { getGreeting };

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
