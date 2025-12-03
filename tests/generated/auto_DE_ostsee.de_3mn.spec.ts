import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ostsee.de_3mn', ['https://www.ostsee.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
