import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_abcfws.com_vuh', ['https://abcfws.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
