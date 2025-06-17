import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_experts.griffith.edu.au_9ds', ["https://experts.griffith.edu.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
