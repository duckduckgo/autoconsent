import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_teluq.ca_onl', ['https://www.teluq.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
