import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fixpart.at_mc1', ['https://fixpart.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
