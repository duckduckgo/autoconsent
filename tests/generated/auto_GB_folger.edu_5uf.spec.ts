import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_folger.edu_5uf', ['https://www.folger.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
