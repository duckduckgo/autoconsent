import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fenixstore.de_cgm', ['https://fenixstore.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
