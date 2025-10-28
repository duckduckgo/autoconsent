import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eno.org_y5i', ['https://www.eno.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
