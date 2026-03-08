import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fairyloot.com_yo7', ['https://fairyloot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
