import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_carersuk.org_0', ['https://www.carersuk.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
