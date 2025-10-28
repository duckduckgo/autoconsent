import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_file.org_6st', ['https://file.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
