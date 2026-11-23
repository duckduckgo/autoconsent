import generateCMPTests from '../playwright/runner';

generateCMPTests('nfl', ['https://www.nfl.com/standings/playoff-picture', 'https://www.chiefs.com/', 'https://www.packers.com/']);
