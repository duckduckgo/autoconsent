import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aberdeencity.spydus.co.uk_rwa', ['https://aberdeencity.spydus.co.uk/cgi-bin/spydus.exe/MSGTRN/WPAC/HOME'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
