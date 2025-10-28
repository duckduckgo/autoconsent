import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zulassung.de_628', ['https://www.zulassung.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
