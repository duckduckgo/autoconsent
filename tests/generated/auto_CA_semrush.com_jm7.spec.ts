import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_semrush.com_jm7', ['https://www.semrush.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
