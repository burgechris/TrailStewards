import WorkRecord from '../models/workRecord';
import MemberGroup from '../models/memberGroup';

export const MEMBERGROUPS = [
  new MemberGroup(
    'm1',
    'Northwest Trail Alliance',
    'NWTA',
    '#9dab86'
  ),
  new MemberGroup(
    'm2',
    'Central Oregon Trail Alliance',
    'COTA',
    '#9dab86'
  ),
  new MemberGroup(
    'm3',
    'Salem Area Trail Alliance',
    'SATA',
    '#9dab86'
  ),
  new MemberGroup(
    'm4',
    'Oregon Timber Trail Alliance',
    'OTTA',
    '#9dab86'
  ),
  new MemberGroup(
    'm5',
    'Hood River Area Trail Stewards',
    'HRATS',
    '#9dab86'
  ),
  new MemberGroup(
    'm6',
    'Rogue Valley Mountain Bike Association',
    'RVMBA',
    '#9dab86'
  ),
  new MemberGroup(
    'm7',
    'Trans-Cascadia',
    'TC',
    '#9dab86'
  ),
  new MemberGroup(
    'm8',
    'Central Oregon Trail Alliance',
    'COTA',
    '#9dab86'
  ),
  new MemberGroup(
    'm9',
    'Greater Oakridge Area Trail Stewards',
    'GOATS',
    '#9dab86'
  )
];

export const WORKRECORDS = [
  new WorkRecord(
    'r1',
    'u1',
    'm1',
    'Sandy Ridge Work Day',
    6,
    30,
    'BLM',
    'Flo Motion',
    'Mt. Hood',
    1
  ),
  new WorkRecord(
    'r2',
    'u1',
    'm1',
    'Rocky Point Work Day',
    6,
    25,
    'BLM',
    'Skeet Chute',
    'Rocky Point',
    1
  ),
  new WorkRecord(
    'r3',
    'u1',
    'm2',
    'Tylers Work Day',
    4,
    15,
    'BLM',
    'Tylers Traverse',
    'Bend',
    2
  )
];
