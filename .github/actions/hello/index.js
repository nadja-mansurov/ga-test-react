const core = require("@actions/core");
const github = require("@actions/github");

try {
  //throw( new Error("some error") )

  core.debug('Debug message');
  core.warning('Warn message');
  core.error('Error message');
  const name = core.getInput("who-to-greet");
  const surname = core.setSecret('test');
  console.log(`Hello ${name}, your surname is ${surname}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup('Logging github object');
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();
  core.exportVariable("TEST", "test var");
} catch (e) {
  core.setFailed(e);
}
