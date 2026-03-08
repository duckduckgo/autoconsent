import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_die-zukunft-steuern.nrw_qsb', ['https://die-zukunft-steuern.nrw/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
