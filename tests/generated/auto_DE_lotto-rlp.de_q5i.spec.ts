import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lotto-rlp.de_q5i', ['https://www.lotto-rlp.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
