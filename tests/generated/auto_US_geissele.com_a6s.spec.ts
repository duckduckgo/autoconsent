import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_geissele.com_a6s', ['https://geissele.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
