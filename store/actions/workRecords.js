import WorkRecord from '../../models/workRecord';

export const DELETE_RECORD = 'DELETE_RECORD';
export const CREATE_RECORD = 'CREATE_RECORD';
export const UPDATE_RECORD = 'UPDATE_RECORD';
export const SET_RECORD = 'SET_RECORD';

export const fetchRecords = () => {
  return async dispatch => {
    try {
      const response = await fetch('https://trail-stewardship-app.firebaseio.com/workrecords.json', 
      );
    if (!response.ok) {
        throw new Error('Something went wrong!');
      }

    const resData = await response.json();
    const loadedWorkRecords = [];

      for (const key in resData) {
        loadedWorkRecords.push(
          new WorkRecord (
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
    } catch(err) {
      throw err;
    }
  };
};

export const deleteRecord = workRecordId => {
	return async (dispatch) => {
		await fetch(
			`https://trail-stewardship-app.firebaseio.com/workrecords/${workRecordId}.json`,
			{
				method: "DELETE",
			}
		);
		dispatch({ type: DELETE_RECORD, rid: workRecordId });
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

export const updateRecord = (
  id,
	memberGroupId,
	title,
	hours,
	volunteers,
	landManager,
	trailName,
	region,
	miles
) => {
	return async (dispatch) => {
		await fetch(
			`https://trail-stewardship-app.firebaseio.com/workrecords/${id}.json`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					memberGroupId,
					title,
					hours,
					volunteers,
					landManager,
					trailName,
					region,
					miles,
				}),
			}
		);

		dispatch({
      type: UPDATE_RECORD,
      rid: id,
			recordData: {
				memberGroupId,
				title,
				hours,
				volunteers,
				landManager,
				trailName,
				region,
				miles,
			},
		});
	};
};