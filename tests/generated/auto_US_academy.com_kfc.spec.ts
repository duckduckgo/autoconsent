import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_academy.com_kfc', ['https://www.academy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
