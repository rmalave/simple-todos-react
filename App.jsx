// App component - represents the whole app
App = React.createClass({

    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
        return {
            tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch()
        }
    },

    renderTasks() {
        // Get tasks from this.data.tasks
        return this.data.tasks.map((task) => {
            return <Task key={ task._id } task={ task }/>;
        });
    },

    handleSubmit(e) {
        e.preventDefault();

        // Find the text field via the React ref
        var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Tasks.insert({
            text: text,
            createAt: new Date() // current time
        });

        // Clear the form
        ReactDOM.findDOMNode(this.refs.textInput).value="";
    },

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                    <form className="new-task" onSubmit={ this.handleSubmit } >
                        <input type="text" ref="textInput" placeholder="Type to add new taks" />
                    </form>
                </header>

                <ul>
                    { this.renderTasks() }
                </ul>
            </div>
        );
    }
});