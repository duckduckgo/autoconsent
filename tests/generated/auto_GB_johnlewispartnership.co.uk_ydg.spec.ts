import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_johnlewispartnership.co.uk_ydg', ['https://www.johnlewispartnership.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
