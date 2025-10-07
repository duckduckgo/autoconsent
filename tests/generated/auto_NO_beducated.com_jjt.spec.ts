import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_beducated.com_jjt', ['https://beducated.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
