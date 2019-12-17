export const CREATE_RECORD = 'CREATE_RECORD';

export const createRecord = (memberGroupId, title, hours, volunteers, landManager, trailName, region, miles) => {
  return {
    type: CREATE_RECORD,
    recordData: {
      memberGroupId,
      title, 
      hours,
      volunteers,
      landManager,
      trailName,
      region,
      miles
    }
  };
};