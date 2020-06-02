import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";
// withRouter for redirecting

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [toDateDisabled, toggleDisabled] = useState(false);
  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Add Your Education</h1>
        <p className="lead">
          <i className="fa fa-graduation-cap"></i> Add any school, bootcamp, etc
          that you have attended
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={(e) => {
          e.preventDefault()
          addEducation(formData, history)
        }}>
          <div className="form-group">
            <input
              onChange={(e) => onChange(e)}
              type="text"
              placeholder="* School or Bootcamp"
              name="school"
              required
              value={school}
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => onChange(e)}
              type="text"
              placeholder="* Degree or Certificate"
              name="degree"
              value={degree}
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => onChange(e)}
              value={fieldofstudy}
              type="text"
              placeholder="Field Of Study"
              name="fieldofstudy"
            />
          </div>
          <div className="form-group">
            <h4>From Date</h4>
            <input
              onChange={(e) => onChange(e)}
              value={from}
              type="date"
              name="from"
            />
          </div>
          <div className="form-group">
            <p>
              <input
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
                value={current}
                type="checkbox"
                name="current"
              />{" "}
              Current School or Bootcamp
            </p>
          </div>
          <div className="form-group">
            <h4>To Date</h4>
            <input
              value={to}
              onChange={(e) => onChange(e)}
              disabled={toDateDisabled ? "disabled" : ""}
              type="date"
              name="to"
            />
          </div>
          <div className="form-group">
            <textarea
              value={description}
              onChange={(e) => onChange(e)}
              name="description"
              cols="30"
              rows="5"
              placeholder="Program Description"
            ></textarea>
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
