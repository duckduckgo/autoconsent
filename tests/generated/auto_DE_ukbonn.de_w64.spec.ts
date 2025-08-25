import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ukbonn.de_w64', ['https://www.ukbonn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
