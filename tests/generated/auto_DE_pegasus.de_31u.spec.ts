import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pegasus.de_31u', ['https://pegasus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
