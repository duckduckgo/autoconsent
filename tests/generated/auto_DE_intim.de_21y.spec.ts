import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_intim.de_21y', ['https://www.intim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
