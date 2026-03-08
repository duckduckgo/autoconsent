import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dormago.de_r1w', ['https://dormago.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
