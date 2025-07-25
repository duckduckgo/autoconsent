import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fixpart.de_uln', ['https://fixpart.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
