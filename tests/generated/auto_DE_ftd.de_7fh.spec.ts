import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ftd.de_7fh', ['https://www.ftd.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
