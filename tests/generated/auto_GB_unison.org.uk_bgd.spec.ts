import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_unison.org.uk_bgd', ['https://www.unison.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
