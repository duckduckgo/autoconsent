import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_johnlewispartnership.co.uk_b38', ['https://www.johnlewispartnership.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
