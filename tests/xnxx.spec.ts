import generateCMPTests from '../playwright/runner';

// the disclaimer is only shown without a preceding age gate in the UK
generateCMPTests('xnxx-com', ['https://www.xnxx.com/'], {
    onlyRegions: ['GB'],
});

// the same rule also covers a bottom cookie bar used by an unrelated group of sites
generateCMPTests('xnxx-com', ['https://newtabtvsearch.com/', 'https://socialnewpagessearch.com/'], {
    onlyRegions: ['GB', 'DE'],
});
