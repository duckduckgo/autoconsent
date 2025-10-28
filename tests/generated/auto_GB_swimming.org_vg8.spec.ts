import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_swimming.org_vg8', ['https://www.swimming.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
