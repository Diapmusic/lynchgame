import React from 'react'
import Ico from './containers/Ico/ico';
import Countdown from "./containers/Ico/useCountdown";
import Prog from './containers/Ico/progress/progress';

function Homeico() {
  return (
    <div className='App'>
        <Countdown timeTillDate="8 31 2019, 9:00 am" timeFormat="MM DD YYYY, h:mm a" />
        <Prog/>
        <Ico/>
    </div>
  )
}

export default Homeico;
