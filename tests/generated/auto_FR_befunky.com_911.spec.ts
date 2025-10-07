import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_befunky.com_911', ['https://www.befunky.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
