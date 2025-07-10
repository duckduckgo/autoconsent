import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_darntough.com_bv0', ['https://darntough.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
