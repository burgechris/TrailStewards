class WorkRecord {
  constructor (id, userId, title, hours, club, landManager, trailName, region, miles ) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.hours = hours;
    this.club = club;
    this.landManager = landManager;
    this.trailName = trailName;
    this.region = region;
    this.miles = miles;
  }
}

export default WorkRecord;