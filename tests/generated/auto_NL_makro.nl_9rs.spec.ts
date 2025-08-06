import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_makro.nl_9rs', ['https://www.makro.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
