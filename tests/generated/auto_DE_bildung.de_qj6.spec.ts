import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bildung.de_qj6', ['https://www.bildung.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
