import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_brighton-hove.spydus.co.uk_lx7', ['https://brighton-hove.spydus.co.uk/cgi-bin/spydus.exe/MSGTRN/WPAC/HOME'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
