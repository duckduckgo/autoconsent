import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_courses.grainger.illinois.edu_h1a', ['https://courses.grainger.illinois.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
