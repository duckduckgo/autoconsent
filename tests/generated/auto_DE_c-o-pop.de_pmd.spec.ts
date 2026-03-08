import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_c-o-pop.de_pmd', ['https://c-o-pop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
