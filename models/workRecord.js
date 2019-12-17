class WorkRecord {
  constructor (id, userId, memberGroupId, title, hours, volunteers, landManager, trailName, region, miles ) {
    this.id = id;
    this.userId = userId;
    this.memberGroupId = memberGroupId;
    this.title = title;
    this.hours = hours;
    this.volunteers = volunteers;
    this.landManager = landManager;
    this.trailName = trailName;
    this.region = region;
    this.miles = miles;
  }
}

export default WorkRecord; 