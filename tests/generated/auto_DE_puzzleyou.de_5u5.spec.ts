import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_puzzleyou.de_5u5', ['https://www.puzzleyou.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
