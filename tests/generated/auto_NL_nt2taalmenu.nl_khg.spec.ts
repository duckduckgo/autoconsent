import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nt2taalmenu.nl_khg', ['https://nt2taalmenu.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
