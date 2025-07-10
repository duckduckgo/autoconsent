import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_amazon.de_zfv', ['https://www.amazon.de/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
