import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_yapikredi.nl_gfz', ['https://www.yapikredi.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
