import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cap-markt.de_ypi', ['https://cap-markt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
