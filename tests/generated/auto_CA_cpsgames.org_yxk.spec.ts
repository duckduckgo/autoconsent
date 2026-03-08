import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cpsgames.org_yxk', ['https://cpsgames.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
