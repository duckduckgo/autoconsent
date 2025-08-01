import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_reviewed.com_bpe', ['https://www.reviewed.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
