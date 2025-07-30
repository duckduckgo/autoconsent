import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_societe.com_qvx', ['https://www.societe.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
