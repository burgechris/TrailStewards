export const CREATE_RECORD = 'CREATE_RECORD';

export const createRecord = (title, hours, club, landManager, trailName, region, miles) => {
  return {
    type: CREATE_RECORD,
    recordData: {
      title, 
      hours,
      club,
      landManager,
      trailName,
      region,
      miles
    }
  };
};