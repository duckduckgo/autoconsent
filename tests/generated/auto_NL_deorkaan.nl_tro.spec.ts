import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deorkaan.nl_tro', ['https://www.deorkaan.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
