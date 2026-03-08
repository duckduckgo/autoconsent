import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aoocci.com_yar', ['https://aoocci.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
