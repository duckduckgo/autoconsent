import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_drivedevilbiss.com_2w1', ['https://drivedevilbiss.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
