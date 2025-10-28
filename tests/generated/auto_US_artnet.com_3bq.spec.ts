import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_artnet.com_3bq', ['https://www.artnet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
