import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eisblog.media_wfn', ['https://eisblog.media/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
