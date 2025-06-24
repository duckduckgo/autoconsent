import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cliftoncameras.co.uk_0', ['https://www.cliftoncameras.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
