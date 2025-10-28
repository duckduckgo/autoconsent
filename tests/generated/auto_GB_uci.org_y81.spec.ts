import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uci.org_y81', ['https://www.uci.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
