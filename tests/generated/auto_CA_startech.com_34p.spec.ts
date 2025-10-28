import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_startech.com_34p', ['https://www.startech.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
