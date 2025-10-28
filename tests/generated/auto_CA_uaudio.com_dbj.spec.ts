import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_uaudio.com_dbj', ['https://www.uaudio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
