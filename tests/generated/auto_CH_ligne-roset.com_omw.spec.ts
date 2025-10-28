import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ligne-roset.com_omw', ['https://www.ligne-roset.com/fr-ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
