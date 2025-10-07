import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_beducated.com_udf', ['https://beducated.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
