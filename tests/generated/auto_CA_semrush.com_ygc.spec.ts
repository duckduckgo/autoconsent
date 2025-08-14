import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_semrush.com_ygc', ['https://www.semrush.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
