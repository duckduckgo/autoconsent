import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.jura.com_bk7', ['https://nl.jura.com/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
