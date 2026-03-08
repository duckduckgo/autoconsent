import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_auson.com_qyt', ['https://auson.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
