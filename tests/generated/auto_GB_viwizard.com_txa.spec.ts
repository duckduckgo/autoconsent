import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_viwizard.com_txa', ['https://www.viwizard.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
