import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_laptopmetlinux.nl_uva', ['https://laptopmetlinux.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
