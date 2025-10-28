import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_geekwire.com_cvb', ['https://www.geekwire.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
