import generateCMPTests from '../playwright/runner';

generateCMPTests('makemytrip', ['https://www.makemytrip.global/'], {
    skipRegions: ['US'],
});
