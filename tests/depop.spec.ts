import generateCMPTests from '../playwright/runner';

generateCMPTests('depop', ['https://www.depop.com/', 'https://www.depop.com/explore/'], {
    skipRegions: ['US'],
});
