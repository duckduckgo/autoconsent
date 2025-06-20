import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_teepublic.com_0', ['https://www.teepublic.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
