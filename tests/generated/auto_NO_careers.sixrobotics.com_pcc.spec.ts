import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_careers.sixrobotics.com_pcc', ['https://careers.sixrobotics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
