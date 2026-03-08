import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dwfgroup.com_pok', ['https://dwfgroup.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
