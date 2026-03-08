import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fixpart.ch_gny', ['https://fixpart.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
