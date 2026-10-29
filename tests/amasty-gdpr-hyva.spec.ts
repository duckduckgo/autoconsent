import generateCMPTests from '../playwright/runner';

generateCMPTests('amasty-gdpr-hyva', [
    'http://stovesareus.co.uk/',
    'https://www.strunz.com/',
    'https://www.agri-expert.fr/',
    'https://www.sigma-foto.de/',
    'https://www.drankgigant.nl/',
    'https://www.biocare.co.uk/',
    'https://www.wrendaledesigns.co.uk/',
    'https://www.snaintongolf.co.uk/',
]);

// no banner shown in the US
generateCMPTests('amasty-gdpr-hyva', ['https://www.brisa.fi/'], {
    skipRegions: ['US'],
});
