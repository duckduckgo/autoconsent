import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_channel5.com_iu1', ['https://www.channel5.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
