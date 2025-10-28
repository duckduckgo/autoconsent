import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kosmo.at_elv', ['https://www.kosmo.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
