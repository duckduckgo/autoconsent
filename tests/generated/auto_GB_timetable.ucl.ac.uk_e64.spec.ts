import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_timetable.ucl.ac.uk_e64', ['https://timetable.ucl.ac.uk/tt/homePage.do'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
