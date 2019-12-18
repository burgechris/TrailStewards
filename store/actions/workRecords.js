import WorkRecord from '../../models/workRecord';

export const CREATE_RECORD = 'CREATE_RECORD';
export const SET_RECORD = 'SET_RECORD';


export const fetchRecords = () => {
  return async dispatch => {
    const response = await fetch('https://trail-stewardship-app.firebaseio.com/workrecords.json', 
  );

    const resData = await response.json();
    const loadedWorkRecords = [];

      for (const key in resData) {
        // console.log(resData)
        loadedWorkRecords.push(new WorkRecord(
          key,
          resData[key].memberGroupId,
          resData[key].title,
          resData[key].hours,
          resData[key].volunteers,
          resData[key].landManager,
          resData[key].trailName,
          resData[key].region,
          resData[key].miles
          )
        );
      }
    dispatch({type: SET_RECORD, workRecords: loadedWorkRecords})
  };
};

export const createRecord = (memberGroupId, title, hours, volunteers, landManager, trailName, region, miles) => {
  return async dispatch => {
    const response = await fetch('https://trail-stewardship-app.firebaseio.com/workrecords.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        memberGroupId,
        title,
        hours,
        volunteers,
        landManager,
        trailName,
        region,
        miles
      })
    });

    const resData = await response.json();

    dispatch ({
      type: CREATE_RECORD,
      recordData: {
        id: resData.name,
        memberGroupId,
        title, 
        hours,
        volunteers,
        landManager,
        trailName,
        region,
        miles
      }
    });
  }
};