import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sqa.org.uk_3nh', ['https://www.sqa.org.uk/sqa/70972.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
