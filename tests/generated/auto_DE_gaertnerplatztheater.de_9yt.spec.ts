import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gaertnerplatztheater.de_9yt', ['https://www.gaertnerplatztheater.de/de/start/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
