import React, { Component } from "react";
import Gender from "./Gender";

class CreateUser extends Component {
  userData;
  

  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Id: "",
      Name: "",
      LastName: "",
      Gender: ""
    };
  }

  // Form Events

  onChangeId(e) {
    this.setState({ Id: e.target.value });
  }

  onChangeName(e) {
    this.setState({ Name: e.target.value });
  }

  onChangeLastName(e) {
    this.setState({ LastName: e.target.value });
  }

  onChangeGender(e) {
    this.setState({ Gender: e.target.value });
  }

  onSubmit = async () => {
    // e.preventDefault()
    let getList = await localStorage.getItem("lists");
    getList = JSON.parse(getList);
    getList.push(this.state);
    console.log(this.state, getList);
    await localStorage.setItem("lists", JSON.stringify(getList));
  };

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        Id: this.userData.Id,
        Name: this.userData.Name,
        LastName: this.userData.LastName,
        Gender: this.userData.Gender
      });
    } else {
      this.setState({
        Id: "",
        Name: "",
        LastName: "",
        Gender: ""
      });
    }
  }

  validate = values => {
    let errors = {};
    let regex = /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/g;
    if (!values.name.trim()) {
      errors.Title = "Name required";
    }

    if (!values.Lastname.trim()) {
      errors.Lastname = "LastName required";
    }

    if (!values.Gender) {
      errors.Gender = "Gender is required";
    } else if (!regex.test(values.Gender)) {
      errors.Gender = "Please Enter Correct Gender Name";
    }

    return errors;
  };
  render() {
    return (
      <>
        <div id="admin-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="admin-heading">Add New User</h1>
              </div>
              <div className="col-md-offset-3 col-md-6">
                <form className="post_form" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Id</label>
                    <input
                      type="text"
                      name="art_id"
                      className="form-control"
                      value={this.state.Id}
                      onChange={this.onChangeId}
                      required
                    />
                    <label>Name</label>
                    <input
                      type="text"
                      name="Name"
                      className="form-control"
                      value={this.state.Name}
                      onChange={this.onChangeName}
                      required
                    />
                    <span
                      id="nameerror"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                  <div className="form-group">
                    <label> LastName</label>
                    <input
                      name="body_dec"
                      className="form-control"
                      value={this.state.LastName}
                      onChange={this.onChangeLastName}
                      required
                    ></input>
                    <span
                      id="decerror"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <input
                      name="Gender"
                      className="form-control"
                      value={this.state.Gender}
                      onChange={this.onChangeGender}
                      required
                    />
                    {/* <select
                    name="status"
                    value={this.state.Gender}
                    onChange={this.onChangeGender}
                    required
                    >
                    <option key="" selected>
                    Gender
                    </option>
                    {GenderList.map((item, index) => (
                    <option key={item}>{item}</option>
                    ))} */}
                    <span
                      id="salerror"
                      className="text-danger font-weight-bold"
                    ></span>
                  </div>
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-primary mt-2"
                    value="Save"
                    required
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateUser;
