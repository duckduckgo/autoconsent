import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_aatbio.com_sfq', ['https://www.aatbio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
