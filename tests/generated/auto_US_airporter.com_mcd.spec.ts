import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_airporter.com_mcd', ['https://airporter.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
