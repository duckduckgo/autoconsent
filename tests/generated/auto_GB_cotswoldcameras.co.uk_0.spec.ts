import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cotswoldcameras.co.uk_0', ['https://www.cotswoldcameras.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
