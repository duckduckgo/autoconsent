import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ugc.fr_2ei', ['https://www.ugc.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
