import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_file.org_yfl', ['https://file.org/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
