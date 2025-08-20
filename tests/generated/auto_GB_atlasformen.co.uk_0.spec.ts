import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_atlasformen.co.uk_0', ['https://www.atlasformen.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
