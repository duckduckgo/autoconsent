import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_excel.london_0', ['https://www.excel.london/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
