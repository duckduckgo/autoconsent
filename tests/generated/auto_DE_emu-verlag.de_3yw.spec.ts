import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_emu-verlag.de_3yw', ['https://emu-verlag.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
