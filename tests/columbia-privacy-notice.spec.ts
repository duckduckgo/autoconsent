import generateCMPTests from '../playwright/runner';

generateCMPTests('columbia-privacy-notice', [
    'https://cas.columbia.edu/cas/login?service=https%3A%2F%2Fwebphoto.columbia.edu%2Fwps%2Fstatus',
    'https://www.jazzstudiesonline.org/',
    'https://artsinitiative.columbia.edu/',
    'https://maap.columbia.edu/',
]);
