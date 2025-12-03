import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_marcos.com_k3c', ['https://www.marcos.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
