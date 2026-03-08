import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_botabota.ca_hbb', ['https://botabota.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
