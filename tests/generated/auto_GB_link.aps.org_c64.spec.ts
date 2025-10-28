import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_link.aps.org_c64', ['https://link.aps.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
