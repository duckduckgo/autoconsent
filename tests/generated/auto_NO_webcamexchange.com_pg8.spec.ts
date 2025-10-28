import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_webcamexchange.com_pg8', ['https://www.webcamexchange.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
