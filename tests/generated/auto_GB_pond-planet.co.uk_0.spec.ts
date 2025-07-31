import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pond-planet.co.uk_0', ['https://www.pond-planet.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
