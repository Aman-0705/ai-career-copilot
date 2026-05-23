const applications = [];

const getApplication = (req, res) => {

    console.log("GET REQUEST HIT");

    res.json(applications);

};

const addApplication = (req, res) => {

    console.log("POST BODY:", req.body);

    const { company, role } = req.body;

    const newApplication = {
        id: Date.now(),
        company,
        role,
        status : "Applied",
    };

    applications.push(newApplication);

    console.log("UPDATED APPLICATIONS:", applications);

    res.json({
        message: "Application added successfully!",
        application: newApplication,
    });

};

const deleteApplication = (req,res) => {

    const applicationId = Number(req.params.id);

    const updatedAppliactions = applications.filter((app)=>app.id !== applicationId);
    applications.length = 0;
    applications.push(...updatedAppliactions);

    res.json({
        message: 'Application added successfully!'
    });
};

const updateApplicationStatus = (req,res) => {
    const applicationId = Number(req.params.id);
    const {status} = req.body;
    const application = applications.find((app)=>app.id === applicationId);
    if(application){
        application.status = status;
        res.json({
            message:"Application updated successfully!",
            application,
        })
    } else {
        res.status(404).json({message:"Application not found!"})
    }
};

module.exports = {
    getApplication,
    addApplication,
    deleteApplication,
    updateApplicationStatus,
};