import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_calexotics.com_vu1', ['https://calexotics.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
