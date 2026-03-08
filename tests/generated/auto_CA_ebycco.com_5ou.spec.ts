import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ebycco.com_5ou', ['https://ebycco.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
