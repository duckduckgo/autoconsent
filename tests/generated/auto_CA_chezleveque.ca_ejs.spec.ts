import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_chezleveque.ca_ejs', ['https://chezleveque.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
