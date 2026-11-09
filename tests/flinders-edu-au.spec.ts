import generateCMPTests from '../playwright/runner';

generateCMPTests('flinders-edu-au', ['https://www.flinders.edu.au/']);

generateCMPTests('flinders-edu-au', ['https://staff.flinders.edu.au/', 'https://students.flinders.edu.au/'], { onlyRegions: ['AU'] });
