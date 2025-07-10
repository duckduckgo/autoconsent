import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_us.norton.com_rsk', ['https://us.norton.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
