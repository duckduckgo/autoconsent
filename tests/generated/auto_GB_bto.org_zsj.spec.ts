import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bto.org_zsj', ['https://www.bto.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
