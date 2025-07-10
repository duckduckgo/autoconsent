import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_direct.aviva.co.uk_32s', ['https://www.direct.aviva.co.uk/MyAccount/login'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
