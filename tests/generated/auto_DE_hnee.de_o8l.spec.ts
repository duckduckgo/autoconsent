import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hnee.de_o8l', ['https://www.hnee.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
