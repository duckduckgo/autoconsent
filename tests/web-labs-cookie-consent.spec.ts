import generateCMPTests from '../playwright/runner';

generateCMPTests('web-labs-cookie-consent', [
    'https://www.lgo.org.uk/',
    'https://www.southderbyshire.gov.uk/',
    'https://www.enjoyenfield.co.uk/',
]);

// these sites are not reachable from outside the UK
generateCMPTests('web-labs-cookie-consent', ['https://www.winchester.gov.uk/', 'https://www.lancaster.gov.uk/'], {
    onlyRegions: ['GB'],
});
