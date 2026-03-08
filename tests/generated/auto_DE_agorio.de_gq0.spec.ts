import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_agorio.de_gq0', ['https://agorio.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
