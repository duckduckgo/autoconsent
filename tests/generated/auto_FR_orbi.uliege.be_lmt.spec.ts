import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_orbi.uliege.be_lmt', ['https://orbi.uliege.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
