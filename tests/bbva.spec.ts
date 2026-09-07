import generateCMPTests from '../playwright/runner';

// bbva.es uses the same banner, but its bot protection blocks datacenter IPs, so it is not listed here.
generateCMPTests('bbva', ['https://www.bbvauk.com/', 'https://www.bbva.be/'], {});
