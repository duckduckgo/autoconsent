import generateCMPTests from '../playwright/runner';

generateCMPTests('derby-council', [
    'https://www.derby.gov.uk/',
    'https://www.derbyhomes.org/',
    'https://www.derbyhomefinder.org/',
    'https://www.adult-learning-derby.org.uk/',
]);
