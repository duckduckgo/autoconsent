import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mcqueensdairies.co.uk_wja', ['https://www.mcqueensdairies.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
