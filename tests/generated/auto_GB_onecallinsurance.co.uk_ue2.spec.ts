import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_onecallinsurance.co.uk_ue2', ['https://www.onecallinsurance.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
