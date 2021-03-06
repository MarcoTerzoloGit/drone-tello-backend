// SEQUENCE DETAILS:
// starts front towards horizon
// testing pitch left and right
// testing roll front and back
// testing yaw left and right

const droneDataSample = [
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '-3',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-5',
		 yaw: '9',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '10',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '10',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '10',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '10',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '10',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '10',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '10',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '9',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '10',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '11',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '9',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '0',
		 yaw: '8',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '0',
		 yaw: '7',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '0',
		 yaw: '7',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '0',
		 yaw: '6',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '0',
		 yaw: '6',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '0',
		 yaw: '6',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '6',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '5',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '5',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '5',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '5',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '4',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '8',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '13',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '19',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '25',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '31',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '38',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '44',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '51',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '58',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '64',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '70',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '77',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '84',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '91',
		 yaw: '-1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '96',
		 yaw: '-2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '100',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '101',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '100',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '100',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '98',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '97',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-1',
		 roll: '95',
		 yaw: '-2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-1',
		 roll: '92',
		 yaw: '-2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-2',
		 roll: '89',
		 yaw: '-1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-3',
		 roll: '85',
		 yaw: '-1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-3',
		 roll: '81',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-4',
		 roll: '72',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-4',
		 roll: '66',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-3',
		 roll: '62',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-3',
		 roll: '57',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-3',
		 roll: '51',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-2',
		 roll: '46',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-2',
		 roll: '42',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-1',
		 roll: '36',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '30',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '25',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '22',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '17',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '12',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '8',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '4',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '2',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '2',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '1',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '0',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '-1',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '-2',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '-5',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '-10',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '-17',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '-24',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '-31',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '-36',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '-41',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '-46',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '-53',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-59',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-63',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-66',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-69',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-70',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '-71',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-71',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '-70',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-70',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-69',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-69',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-67',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '-64',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '-60',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '-54',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '-50',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-1',
		 roll: '-45',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-2',
		 roll: '-40',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-3',
		 roll: '-33',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-4',
		 roll: '-28',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-4',
		 roll: '-24',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '-21',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '-18',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '-15',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-4',
		 roll: '-11',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '-9',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-4',
		 roll: '-6',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '-4',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '-3',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '-3',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '-3',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '-2',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '-2',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-3',
		 roll: '-2',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-2',
		 roll: '-1',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '-1',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '5',
		 roll: '-1',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '11',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '17',
		 roll: '1',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '24',
		 roll: '4',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '31',
		 roll: '4',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '39',
		 roll: '7',
		 yaw: '5',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '47',
		 roll: '9',
		 yaw: '7',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '54',
		 roll: '11',
		 yaw: '9',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '59',
		 roll: '12',
		 yaw: '9',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '64',
		 roll: '12',
		 yaw: '9',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '69',
		 roll: '12',
		 yaw: '9',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '73',
		 roll: '10',
		 yaw: '7',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '77',
		 roll: '8',
		 yaw: '5',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '79',
		 roll: '8',
		 yaw: '5',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '81',
		 roll: '7',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '83',
		 roll: '6',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '84',
		 roll: '2',
		 yaw: '-1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '83',
		 roll: '0',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '81',
		 roll: '0',
		 yaw: '-3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '75',
		 roll: '2',
		 yaw: '-1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '69',
		 roll: '3',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '63',
		 roll: '5',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '56',
		 roll: '5',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '48',
		 roll: '4',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '41',
		 roll: '3',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '35',
		 roll: '1',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '29',
		 roll: '0',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '23',
		 roll: '0',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '17',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '12',
		 roll: '1',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '1',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '6',
		 roll: '1',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '5',
		 roll: '1',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '5',
		 roll: '1',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-1',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-6',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-12',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-18',
		 roll: '0',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-24',
		 roll: '-1',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-30',
		 roll: '0',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-36',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-42',
		 roll: '1',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-48',
		 roll: '2',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-52',
		 roll: '1',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-55',
		 roll: '0',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-57',
		 roll: '-1',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-57',
		 roll: '0',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-57',
		 roll: '0',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-56',
		 roll: '1',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-54',
		 roll: '2',
		 yaw: '-1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-51',
		 roll: '2',
		 yaw: '-1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-47',
		 roll: '2',
		 yaw: '-1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-40',
		 roll: '1',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-32',
		 roll: '0',
		 yaw: '1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-25',
		 roll: '1',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-18',
		 roll: '1',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-12',
		 roll: '3',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-10',
		 roll: '3',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-10',
		 roll: '5',
		 yaw: '0',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-9',
		 roll: '5',
		 yaw: '-2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-9',
		 roll: '5',
		 yaw: '-5',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-9',
		 roll: '6',
		 yaw: '-8',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-9',
		 roll: '7',
		 yaw: '-11',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-8',
		 roll: '8',
		 yaw: '-15',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-7',
		 roll: '8',
		 yaw: '-18',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-6',
		 roll: '8',
		 yaw: '-21',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-7',
		 roll: '9',
		 yaw: '-26',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-5',
		 roll: '8',
		 yaw: '-30',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-3',
		 roll: '8',
		 yaw: '-35',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-1',
		 roll: '7',
		 yaw: '-40',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '5',
		 yaw: '-44',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-1',
		 roll: '2',
		 yaw: '-49',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '1',
		 yaw: '-53',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '1',
		 yaw: '-57',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '1',
		 yaw: '-62',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '1',
		 yaw: '-67',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '4',
		 roll: '0',
		 yaw: '-74',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '1',
		 yaw: '-81',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '-87',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '0',
		 yaw: '-95',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '-1',
		 yaw: '-101',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '-1',
		 yaw: '-105',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '-2',
		 yaw: '-108',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '5',
		 roll: '-2',
		 yaw: '-110',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '7',
		 roll: '-1',
		 yaw: '-111',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '-1',
		 yaw: '-114',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '0',
		 yaw: '-116',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '7',
		 roll: '0',
		 yaw: '-116',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '7',
		 roll: '0',
		 yaw: '-115',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '7',
		 roll: '0',
		 yaw: '-114',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '0',
		 yaw: '-113',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '0',
		 yaw: '-111',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '0',
		 yaw: '-110',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '0',
		 yaw: '-108',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '1',
		 yaw: '-107',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '9',
		 roll: '1',
		 yaw: '-105',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '9',
		 roll: '1',
		 yaw: '-103',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '10',
		 roll: '2',
		 yaw: '-100',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '10',
		 roll: '2',
		 yaw: '-98',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '10',
		 roll: '3',
		 yaw: '-96',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '10',
		 roll: '3',
		 yaw: '-94',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '10',
		 roll: '3',
		 yaw: '-91',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '10',
		 roll: '4',
		 yaw: '-89',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '9',
		 roll: '4',
		 yaw: '-85',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '9',
		 roll: '4',
		 yaw: '-81',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '9',
		 roll: '4',
		 yaw: '-77',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '7',
		 roll: '4',
		 yaw: '-72',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '7',
		 roll: '3',
		 yaw: '-68',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '7',
		 roll: '3',
		 yaw: '-65',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '3',
		 yaw: '-61',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '3',
		 yaw: '-56',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '9',
		 roll: '3',
		 yaw: '-51',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '9',
		 roll: '2',
		 yaw: '-45',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '9',
		 roll: '2',
		 yaw: '-40',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '2',
		 yaw: '-34',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '3',
		 yaw: '-28',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '8',
		 roll: '3',
		 yaw: '-21',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '7',
		 roll: '4',
		 yaw: '-15',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '7',
		 roll: '4',
		 yaw: '-10',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '7',
		 roll: '5',
		 yaw: '-5',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '6',
		 roll: '5',
		 yaw: '-1',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '5',
		 roll: '5',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '4',
		 roll: '5',
		 yaw: '9',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '6',
		 yaw: '15',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '3',
		 roll: '7',
		 yaw: '20',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '1',
		 roll: '7',
		 yaw: '26',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '7',
		 yaw: '31',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '7',
		 yaw: '35',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-2',
		 roll: '7',
		 yaw: '40',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-3',
		 roll: '6',
		 yaw: '45',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-4',
		 roll: '5',
		 yaw: '50',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-6',
		 roll: '4',
		 yaw: '55',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-8',
		 roll: '3',
		 yaw: '59',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-10',
		 roll: '2',
		 yaw: '63',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-12',
		 roll: '2',
		 yaw: '66',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-14',
		 roll: '1',
		 yaw: '69',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-15',
		 roll: '1',
		 yaw: '71',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-15',
		 roll: '0',
		 yaw: '70',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-14',
		 roll: '1',
		 yaw: '68',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-13',
		 roll: '1',
		 yaw: '64',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-12',
		 roll: '2',
		 yaw: '59',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-10',
		 roll: '2',
		 yaw: '53',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-9',
		 roll: '2',
		 yaw: '47',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-8',
		 roll: '2',
		 yaw: '41',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-6',
		 roll: '1',
		 yaw: '34',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-4',
		 roll: '1',
		 yaw: '26',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '-1',
		 roll: '0',
		 yaw: '12',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '0',
		 yaw: '8',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '-1',
		 yaw: '4',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '0',
		 roll: '0',
		 yaw: '3',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	},
	{
		 pitch: '2',
		 roll: '0',
		 yaw: '2',
		 h: '0',
		 bat: '17',
	}
]

module.exports = {
  droneDataSample
}