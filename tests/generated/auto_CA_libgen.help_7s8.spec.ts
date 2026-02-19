import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_libgen.help_7s8', ['https://libgen.help/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
