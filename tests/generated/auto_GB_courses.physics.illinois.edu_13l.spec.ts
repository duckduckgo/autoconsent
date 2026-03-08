import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_courses.physics.illinois.edu_13l', ['https://courses.physics.illinois.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
