import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_geissele.com_alh', ['https://geissele.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
