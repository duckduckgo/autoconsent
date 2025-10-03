import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_befunky.com_mxw', ['https://www.befunky.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
