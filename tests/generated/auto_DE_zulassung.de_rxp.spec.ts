import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zulassung.de_rxp', ['https://www.zulassung.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
