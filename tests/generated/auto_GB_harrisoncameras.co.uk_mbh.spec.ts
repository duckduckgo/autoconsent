import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_harrisoncameras.co.uk_mbh', ['https://harrisoncameras.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
