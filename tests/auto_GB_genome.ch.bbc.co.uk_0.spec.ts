import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_GB_genome.ch.bbc.co.uk_0', ["https://genome.ch.bbc.co.uk/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["GB"]});
