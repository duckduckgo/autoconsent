import generateCMPTests from '../playwright/runner';

generateCMPTests('sg-cookies', [
    'https://www.bestewarmtepomp.nl/',
    'https://www.nationaalbespaarcentrum.nl/',
    'https://www.satt.cz/',
    'https://epassage24.de/',
    'https://geneva-arena.ch/',
    'https://www.babetkovo.sk/',
]);

// these sites reload the page after the click, so the self-test result is lost
generateCMPTests('sg-cookies', ['https://www.buywithconfidence.gov.uk/', 'https://zengo.eu/', 'https://ceceurope.org/'], {
    testSelfTest: false,
});
