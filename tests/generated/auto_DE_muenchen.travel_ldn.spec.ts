import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_muenchen.travel_ldn', ['https://www.muenchen.travel/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
