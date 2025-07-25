import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bimpli.com_6m2', ['https://www.bimpli.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
