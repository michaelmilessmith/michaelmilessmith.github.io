class App extends React.Component {
	constructor() {
    super();
    this.state = {
    	result: 'No Pizza',
      people: 0,
    	slices: 0
    };
  }
  handlePeopleChange(e) {
  console.log(this.state);
  	this.change(e.target.value, this.state.slices);
  }
  handleSliceChange(e) {
  	this.change(this.state.people, e.target.value);
  }
  change(people, slices){
  	this.setState({
    	people: people,
      slices: slices,
    	result: people * slices
    });
  }
  render() {
  	let solution = "No Pizza",
    		slicesAvailible = 0;
  	for (let key of this.props.options.keys()) {
    	if(key >= this.state.result){
      	solution = this.props.options.get(key);
        slicesAvailible = key;
        break;
      }
		}
    return (
      <div>
      <Input handlePeopleChange={(e) => this.handlePeopleChange(e)} handleSliceChange={(e) => this.handleSliceChange(e)}/>
            <Result solution={solution} result={this.state.result} slices={slicesAvailible} people={this.state.people} />

    </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return (
      <div className="panel-body">
        <form>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="number" onChange={(e) => this.props.handlePeopleChange(e)} placeholder="Number of People" className="form-control"/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="number" onChange={(e) => this.props.handleSliceChange(e)} placeholder="Number of Slices per Person" className="form-control"/>
            </div>
          </div>
        </form>
      </div>
    );

  }
}

class Result extends React.Component {
  render() {
    return (
      <p>
        Result: <strong>{this.props.solution} </strong>
        for a total of <strong>{this.props.slices}</strong> slices,
        leaving <strong>{this.props.slices - this.props.result}</strong> left over or
        <strong> {(this.props.slices / this.props.people).toFixed(2)}</strong> slices each</p>);

  }
}

const options = new Map();
options.set(16, "Two Mediums");
options.set(20, "Two Larges");
options.set(32, "Four Mediums");
options.set(36, "Two Larges, Two Mediums");
options.set(40, "Four Larges");
options.set(48, "Six Mediums");
options.set(52, "Two Larges, Four Mediums");
options.set(56, "Four Larges, Two Mediums");
options.set(60, "Six Larges");
options.set(64, "Eight Mediums");
options.set(68, "Two Larges, Six Mediums");
options.set(72, "Four Larges, Four Mediums");
options.set(76, "Six Larges, Two Mediums");
options.set(80, "Eight Larges");



ReactDOM.render(
  <App options={options}/>,
  document.getElementById('container')
);
