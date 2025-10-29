import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_geissele.com_0tu', ['https://geissele.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
