import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_societe.com_4x7', ['https://www.societe.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
