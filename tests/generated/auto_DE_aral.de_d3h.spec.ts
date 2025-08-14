import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aral.de_d3h', ['https://www.aral.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
