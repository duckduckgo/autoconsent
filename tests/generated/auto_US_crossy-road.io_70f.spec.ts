import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_crossy-road.io_70f', ['https://crossy-road.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
