import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_semrush.com_v2t', ['https://www.semrush.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
