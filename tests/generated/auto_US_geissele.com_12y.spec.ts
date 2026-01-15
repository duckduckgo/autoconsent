import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_geissele.com_12y', ['https://geissele.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
