import generateCMPTests from '../playwright/runner';

generateCMPTests('islington-council', [
    'https://www.islington.gov.uk/',
    'https://www.nrpfnetwork.org.uk/',
    'https://liftfutures.london/',
    'https://www.islingtonscp.org.uk/',
]);
