import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airsoft2go.de_dmn', ['https://airsoft2go.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
