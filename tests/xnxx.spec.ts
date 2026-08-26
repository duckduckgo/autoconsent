import generateCMPTests from '../playwright/runner';

generateCMPTests('xnxx-com', ['https://www.xnxx.com/', 'https://www.pornorama.com/'], {
    onlyRegions: ['GB'],
});

// the same rule also covers a bottom cookie bar used by an unrelated group of sites
generateCMPTests('xnxx-com', ['https://newtabtvsearch.com/', 'https://socialnewpagessearch.com/'], {
    onlyRegions: ['GB', 'DE'],
});
