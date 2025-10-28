import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scalemodelscenery.co.uk_a1u', ['https://www.scalemodelscenery.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
