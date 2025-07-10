import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_somersetcountygazette.co.uk_cye', ['https://www.somersetcountygazette.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
