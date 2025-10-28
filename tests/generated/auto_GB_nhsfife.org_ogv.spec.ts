import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nhsfife.org_ogv', ['https://www.nhsfife.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
