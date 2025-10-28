import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_undergraduate.study.cam.ac.uk_7xp', ['https://www.undergraduate.study.cam.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
