import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_code2care.org_fey', ['https://code2care.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
