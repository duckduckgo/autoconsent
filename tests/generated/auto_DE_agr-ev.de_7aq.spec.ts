import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_agr-ev.de_7aq', ['https://agr-ev.de/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
