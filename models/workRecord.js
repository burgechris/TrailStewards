class WorkRecord {
  constructor (id, userId, memberGroupId, title, hours, volunteers, club, landManager, trailName, region, miles ) {
    this.id = id;
    this.userId = userId;
    this.memberGroupId = memberGroupId;
    this.title = title;
    this.hours = hours;
    this.volunteers = volunteers;
    this.club = club;
    this.landManager = landManager;
    this.trailName = trailName;
    this.region = region;
    this.miles = miles;
  }
}

export default WorkRecord; 