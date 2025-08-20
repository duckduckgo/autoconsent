import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fixpart.de_zs5', ['https://fixpart.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
