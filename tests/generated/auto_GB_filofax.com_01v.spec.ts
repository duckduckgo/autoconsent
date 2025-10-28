import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_filofax.com_01v', ['https://filofax.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
