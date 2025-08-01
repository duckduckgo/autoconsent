import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.tommy.com_6rs', ['https://nl.tommy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
