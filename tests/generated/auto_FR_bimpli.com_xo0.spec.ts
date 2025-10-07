import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bimpli.com_xo0', ['https://www.bimpli.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
