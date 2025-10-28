import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_prowritingaid.com_78w', ['https://prowritingaid.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
