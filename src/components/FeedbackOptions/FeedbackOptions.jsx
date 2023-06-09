import React from "react";
import PropTypes from 'prop-types';
import {FeedbackButtonContainer, FeedbackButton } from "./FeedbackOptions.styled";

 function FeedbackOptions({onLeaveFeedback}) {
    return (
        <>
          <FeedbackButtonContainer>
              <FeedbackButton name="good" onClick={onLeaveFeedback}>Good</FeedbackButton>
              <FeedbackButton name="neutral" onClick={onLeaveFeedback}>Neutral</FeedbackButton>
              <FeedbackButton name="bad" onClick={onLeaveFeedback}>Bad</FeedbackButton>
          </FeedbackButtonContainer>
        </>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions

