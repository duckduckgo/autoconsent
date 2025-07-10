import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ercol.com_9p1', ['https://www.ercol.com/en-gb'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
