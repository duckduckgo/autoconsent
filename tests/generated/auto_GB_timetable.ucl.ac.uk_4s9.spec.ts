import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_timetable.ucl.ac.uk_4s9', ['https://timetable.ucl.ac.uk/tt/homePage.do'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
