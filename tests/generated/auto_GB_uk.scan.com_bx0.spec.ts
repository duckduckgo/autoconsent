import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.scan.com_bx0', ['https://uk.scan.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
