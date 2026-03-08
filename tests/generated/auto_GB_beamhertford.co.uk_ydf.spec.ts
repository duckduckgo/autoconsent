import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_beamhertford.co.uk_ydf', ['https://beamhertford.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
