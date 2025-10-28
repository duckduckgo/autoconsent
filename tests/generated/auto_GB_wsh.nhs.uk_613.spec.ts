import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wsh.nhs.uk_613', ['https://www.wsh.nhs.uk/Home.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
