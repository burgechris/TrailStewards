import { CREATE_RECORD } from '../actions/workRecords';
import WorkRecord from '../../models/workRecord';
import WORKRECORDS from '../../data/dummyData';

const initialState = {
  workRecords: WORKRECORDS,
  filteredRecords: WORKRECORDS
}


export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECORD:
      const newWorkRecord = new WorkRecord(
        new Date().toString(),
        action.recordData.title,
        action.recordData.hours,
        action.recordData.volunteers,
        action.recordData.club,
        action.recordData.landManager,
        action.recordData.trailName,
        action.recordData.region,
        action.recordData.miles  
      );
      return {
        ...state,
        workRecords: state.workRecords.concat(newWorkRecord),
      };
  }
  return state;
};