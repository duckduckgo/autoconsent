import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_filofax.com_uxo', ['https://filofax.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
