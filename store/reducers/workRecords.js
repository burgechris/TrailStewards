import { CREATE_RECORD, SET_RECORD } from '../actions/workRecords';
import WorkRecord from '../../models/workRecord';
import { WORKRECORDS } from '../../data/dummyData';

const initialState = {
  workRecords: WORKRECORDS,
}


export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RECORD:
      return {
        workRecords: action.workRecords,
      };

    case CREATE_RECORD:
      const newWorkRecord = new WorkRecord(
        action.recordData.id,
        // action.recordData.userId,
        action.recordData.memberGroupId,
        action.recordData.title,
        action.recordData.hours,
        action.recordData.volunteers,
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