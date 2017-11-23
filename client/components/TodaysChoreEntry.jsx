import React from 'react';
import moment from 'moment';

function TodaysChoreEntry({ chore, index, handleCompletion }) {
  console.log(chore.next_date_due);
  return (
    <div className="row todays-chore-entry">
      <input
        className="done"
        type="checkbox"
        checked={chore.completed}
        onChange={() => handleCompletion(index)}
      />
      <span className="chore-name">{chore.chore_name} |</span>
      <span className="chore-last-done">
        | Last Completed {moment(chore.last_date_completed)
          .calendar(null, {
            lastDay: '[Yesterday]',
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            lastWeek: '[last] dddd',
            nextWeek: 'dddd',
            sameElse: 'L',
          })
        }
      </span>
    </div>
  );
}

export default TodaysChoreEntry;
