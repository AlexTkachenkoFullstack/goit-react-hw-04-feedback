import React from "react";
import PropTypes from 'prop-types';
import { addBackgroundColor } from "utils/addBackgroundColor";
import { StatisticsList, StatisticItemName, StatisticsItem } from "./Statistics.styled";


function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
            <StatisticsList>
                <StatisticsItem>
                    <StatisticItemName>Good:
                       <span> {good}</span>
                    </StatisticItemName>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticItemName>Neutral:
                       <span> {neutral}</span>
                    </StatisticItemName>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticItemName>Bad:
                       <span>{bad} </span>
                    </StatisticItemName>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticItemName>Total:
                       <span> {total}</span>
                    </StatisticItemName>
                </StatisticsItem>
                <StatisticsItem>
                    <StatisticItemName style={{backgroundColor:addBackgroundColor(positivePercentage)}}>Positive feedback:
                        <span> {positivePercentage}</span> %
                    </StatisticItemName>
                </StatisticsItem>
            </StatisticsList>
        )
}

export default Statistics

Statistics.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired
}