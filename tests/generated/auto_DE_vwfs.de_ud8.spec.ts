import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vwfs.de_ud8', ['https://www.vwfs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
