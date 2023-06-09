import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const NotificationText = styled.p`
font-weight: 400;
`

export function Notification({ message }) {
     return  <NotificationText>{message}</NotificationText>
}


Notification.propTypes = {
    message:PropTypes.string.isRequired
}