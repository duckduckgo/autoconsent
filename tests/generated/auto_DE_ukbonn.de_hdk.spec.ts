import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ukbonn.de_hdk', ['https://www.ukbonn.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
