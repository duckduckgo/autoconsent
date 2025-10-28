import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hackernoon.com_jke', ['https://hackernoon.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
