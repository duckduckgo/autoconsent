import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ally.com_equ', ['https://www.ally.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
