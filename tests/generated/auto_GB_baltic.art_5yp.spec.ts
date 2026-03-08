import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_baltic.art_5yp', ['https://baltic.art/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
