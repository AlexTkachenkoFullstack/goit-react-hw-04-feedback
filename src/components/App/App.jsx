import React from "react";
import { useState } from "react";
import { AppContainer } from "./App.styled";
import { countTotalFeedback } from "utils/countTotalFeedback";
import { countPositiveFeedbackPercentage } from "utils/countPositiveFeedbackPercentage";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import { Notification } from "components/Notification/Notification";

export function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad]=useState(0)

  const handleFeedbackOnClick = (event) => {
    const { name } = event.target;
    switch (name) {
        case 'good':
        setGood(prevState => prevState + 1)
        break
        case 'neutral':
        setNeutral(prevState => prevState + 1)
        break
        case 'bad':
        setBad(prevState => prevState + 1)
        break
      default:
        return
    }
}

return (<AppContainer>
           <Section title={"Please leave feedback"}>
              <FeedbackOptions
                  onLeaveFeedback={handleFeedbackOnClick}
              />
          </Section>
        
          <Section title="Statistics">
              {good === 0 && neutral === 0 && bad === 0
                  ? <Notification message="There is no feedback"/>
                  : <Statistics
                      good={good}
                      neutral={neutral}
                      bad={bad}
                      total={countTotalFeedback({good,neutral,bad})}
                      positivePercentage={countPositiveFeedbackPercentage({good,neutral,bad})}
                   />
               }
          </Section>
      </AppContainer>)
}













