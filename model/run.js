/**
 * Represents a Run
 */

function Run(req){
    this.id = req.query.RUNID;
    this.urlToBuild = req.query.URLTOBUILD;
    this.userName = req.query.USERNAME;
    this.serverUrl = req.query.SERVERURL;
    this.androidBuildJob = req.query.ANDROIDBUILDJOB;
    this.fiName = req.query.FINAME;
    this.reportEmailAddress = req.query.USEREMAIL;
    this.testPlanId = req.query.TESTPLANID;
    this.platformToRun = req.query.PLATFORMTORUN;
    this.featuresToRun = req.query.FEATURETORUN;
}

module.exports