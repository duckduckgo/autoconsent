import generateCMPTests from '../playwright/runner';

const urls = ['https://waplog.com/', 'https://wchat.mobi/', 'https://w-match.com/', 'https://dateway.app/'];

generateCMPTests('waplog', urls, { mobile: false });
generateCMPTests('waplog', urls, { mobile: true });
