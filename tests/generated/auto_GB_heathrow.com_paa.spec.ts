import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_heathrow.com_paa', ['https://www.heathrow.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
