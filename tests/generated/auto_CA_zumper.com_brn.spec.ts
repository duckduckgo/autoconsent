import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_zumper.com_brn', ['https://www.zumper.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
