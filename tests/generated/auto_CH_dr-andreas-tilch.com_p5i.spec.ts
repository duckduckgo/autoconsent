import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dr-andreas-tilch.com_p5i', ['https://dr-andreas-tilch.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
