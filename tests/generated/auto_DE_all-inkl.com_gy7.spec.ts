import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_all-inkl.com_gy7', ['https://all-inkl.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
