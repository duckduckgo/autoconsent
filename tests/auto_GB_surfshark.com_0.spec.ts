import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_surfshark.com_0', ['https://surfshark.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
