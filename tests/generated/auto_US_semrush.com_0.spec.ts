import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_semrush.com_0', ['https://www.semrush.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
