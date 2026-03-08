import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ebac.com_xgs', ['https://ebac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
