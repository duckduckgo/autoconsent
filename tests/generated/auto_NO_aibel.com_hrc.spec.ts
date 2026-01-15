import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aibel.com_hrc', ['https://aibel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
