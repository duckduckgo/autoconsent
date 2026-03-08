import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_embraceme.org_f3v', ['https://embraceme.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
