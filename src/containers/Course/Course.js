import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: "",
  };
  componentDidMount() {
    this.parseQueryParams();
  }

  componentDidUpdate() {
    this.parseQueryParams();
  }

  parseQueryParams() {
    //console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (this.state.courseTitle !== param[1]) 
      this.setState({ courseTitle: param[1] });
    }
  }
  render() {
    let courseTitle = <p>Loading...</p>;
    if (this.state.courseTitle) {
      courseTitle = <h1>{this.state.courseTitle}</h1>;
    }
    return (
      <div>
        {courseTitle}
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
