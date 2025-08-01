import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.jura.com_32q', ['https://nl.jura.com/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
