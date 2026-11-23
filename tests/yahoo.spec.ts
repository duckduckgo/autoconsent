import generateCMPTests from '../playwright/runner';

generateCMPTests('Yahoo', ['https://tw.yahoo.com/', 'https://tw.news.yahoo.com/'], {
    skipRegions: ['US'],
});
