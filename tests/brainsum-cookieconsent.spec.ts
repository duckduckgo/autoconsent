import generateCMPTests from '../playwright/runner';

generateCMPTests('brainsum-cookieconsent', ['https://sede.dgt.gob.es/', 'https://building.lv/', 'https://www.stoklasa.cz/']);

// settings link is <a href="#">, the hash change re-injects the test content script and breaks the self-test
generateCMPTests('brainsum-cookieconsent', ['https://mwomercs.com/', 'https://www.wernerherzog.com/', 'https://www.toplo.bg/'], {
    testSelfTest: false,
});
