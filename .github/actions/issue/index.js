const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    //throw( new Error("some error") )
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");
    const octokit = new github.getOctokit(token);

    const reponse = await octokit.rest.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split("\n") : undefined,
    });

    core.setOutput("issue", JSON.stringify(response.data));
  } catch (e) {
    core.setFailed(e);
  }
}

run();
