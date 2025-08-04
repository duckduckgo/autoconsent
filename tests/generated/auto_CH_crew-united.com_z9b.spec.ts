import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_crew-united.com_z9b', ['https://www.crew-united.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
