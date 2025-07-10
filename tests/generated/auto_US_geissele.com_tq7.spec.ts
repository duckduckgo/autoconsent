import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_geissele.com_tq7', ['https://geissele.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
