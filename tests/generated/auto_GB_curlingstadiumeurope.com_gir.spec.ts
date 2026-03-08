import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_curlingstadiumeurope.com_gir', ['https://curlingstadiumeurope.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
