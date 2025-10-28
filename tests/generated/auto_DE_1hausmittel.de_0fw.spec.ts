import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_1hausmittel.de_0fw', ['https://1hausmittel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
