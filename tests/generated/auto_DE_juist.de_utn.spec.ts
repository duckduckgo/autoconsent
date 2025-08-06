import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_juist.de_utn', ['https://www.juist.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
