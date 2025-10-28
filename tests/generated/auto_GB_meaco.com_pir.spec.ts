import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_meaco.com_pir', ['https://www.meaco.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
