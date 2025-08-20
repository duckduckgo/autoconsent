import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_thefp.com_qu7', ['https://www.thefp.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
