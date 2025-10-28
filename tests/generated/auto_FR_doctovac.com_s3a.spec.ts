import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_doctovac.com_s3a', ['https://www.doctovac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
