import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_psref.lenovo.com_sss', ['https://psref.lenovo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
