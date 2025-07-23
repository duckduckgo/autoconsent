import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wellcare.com_42f', ['https://www.wellcare.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
