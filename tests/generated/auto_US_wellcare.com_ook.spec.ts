import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wellcare.com_ook', ['https://www.wellcare.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
