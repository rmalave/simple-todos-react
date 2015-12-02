Tasks = new Mongo.Collection("tasks");

if(Meteor.isClient) {
    // This code is executed on the client only
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });

    Meteor.startup(() => {
        ReactDOM.render(<App />, document.getElementById("render-target"));
    });
}