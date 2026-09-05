import generateCMPTests from '../playwright/runner';

// The consent modal is only served to EEA/UK visitors.
generateCMPTests('japannews.yomiuri.co.jp', ['https://japannews.yomiuri.co.jp/news-services/ap/20240908-210030/'], {
    onlyRegions: ['UK', 'DE', 'FR'],
});
