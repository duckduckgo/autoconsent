import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_all-inkl.com_rbs', ['https://all-inkl.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
