import generateCMPTests from '../playwright/runner';

generateCMPTests('kiwico', ['https://www.kiwico.com/0-5'], {
    skipRegions: ['US'],
});
