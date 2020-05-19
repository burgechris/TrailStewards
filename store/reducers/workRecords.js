import { 
  DELETE_RECORD,
  UPDATE_RECORD,
  CREATE_RECORD, 
  SET_RECORD } from '../actions/workRecords';
import WorkRecord from '../../models/workRecord';
import { WORKRECORDS } from '../../data/dummyData';

const initialState = {
  availableWorkRecords: WORKRECORDS,
}


export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RECORD:
      return {
				availableWorkRecords: action.workRecords,
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
				availableWorkRecords: state.workRecords.concat(newWorkRecord),
			};
    case UPDATE_RECORD:
      const updatedWorkRecord = new WorkRecord(
				action.rid,
				action.recordData.memberGroupId,
				action.recordData.title,
				action.recordData.hours,
				action.recordData.volunteers,
				action.recordData.landManager,
				action.recordData.trailName,
				action.recordData.region,
				action.recordData.miles
      );
      const availableWorkRecordIndex = state.availableWorkRecords.findIndex(
				(wr) => wr.id === action.rid
      ); 
      const updatedAvailableWorkRecord = [...state.availableWorkRecords];
      updatedAvailableWorkRecord[availableWorkRecordIndex] = updatedWorkRecord;
      return {
				...state,
				availableWorkRecords: updatedAvailableWorkRecord,
      };
     case DELETE_RECORD:
     return {
       ...state,
       availableWorkRecords: state.availableWorkRecords.filter(
         wr => wr.id !== action.rid
       )
     };
  }
  return state;
};