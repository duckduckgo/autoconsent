import generateCMPTests from "../playwright/runner";
generateCMPTests('auto_AU_discover.utas.edu.au_gql', ["https://discover.utas.edu.au/"], {testOptIn: false, testSelfTest: false, onlyRegions: ["AU"]});
