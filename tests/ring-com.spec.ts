import generateCMPTests from '../playwright/runner';

generateCMPTests('ring.com', ['https://ring.com/', 'https://nl-nl.ring.com/', 'https://shop.ring.com/', 'https://www.ring.com/de-de/']);
