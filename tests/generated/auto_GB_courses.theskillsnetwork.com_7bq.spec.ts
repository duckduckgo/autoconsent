import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_courses.theskillsnetwork.com_7bq', ['https://courses.theskillsnetwork.com/courses/find-a-course'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
