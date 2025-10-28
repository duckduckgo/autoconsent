import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gtr.ukri.org_8zf', ['https://gtr.ukri.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
