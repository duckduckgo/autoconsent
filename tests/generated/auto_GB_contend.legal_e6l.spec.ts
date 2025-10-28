import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_contend.legal_e6l', ['https://contend.legal/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
