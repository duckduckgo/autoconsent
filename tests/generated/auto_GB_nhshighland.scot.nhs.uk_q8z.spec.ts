import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nhshighland.scot.nhs.uk_q8z', ['https://www.nhshighland.scot.nhs.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
