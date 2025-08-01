import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_club.autodoc.co.uk_ji3', ['https://club.autodoc.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
