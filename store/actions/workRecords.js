export const CREATE_RECORD = 'CREATE_RECORD';

export const createRecord = (title, hours, volunteers, club, landManager, trailName, region, miles) => {
  return {
    type: CREATE_RECORD,
    recordData: {
      title, 
      hours,
      volunteers,
      club,
      landManager,
      trailName,
      region,
      miles
    }
  };
};