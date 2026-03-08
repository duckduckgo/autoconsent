import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_central-bb.de_z8x', ['https://central-bb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
