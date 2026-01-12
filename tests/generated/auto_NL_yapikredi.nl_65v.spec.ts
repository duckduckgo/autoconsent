import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_yapikredi.nl_65v', ['https://www.yapikredi.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
