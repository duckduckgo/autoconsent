import generateCMPTests from '../playwright/runner';

generateCMPTests('scotland-police-uk', ['https://www.scotland.police.uk/'], {
    // the site geo-blocks DE visitors
    skipRegions: ['DE'],
});
