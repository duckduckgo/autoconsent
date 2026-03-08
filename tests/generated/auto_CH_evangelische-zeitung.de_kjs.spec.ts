import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_evangelische-zeitung.de_kjs', ['https://evangelische-zeitung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
