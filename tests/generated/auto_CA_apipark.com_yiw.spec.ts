import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_apipark.com_yiw', ['https://apipark.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
