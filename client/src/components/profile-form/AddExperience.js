import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";
// withRouter for redirecting

const AddExperience = ({addExperience, history}) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [toDateDisabled, toggleDisabled] = useState(false);
  const { company, title, location, from, to, current, description } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Add An Experience</h1>
        <p className="lead">
          <i className="fas fa-code-branch"></i> Add any developer/programming
          positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form onSubmit={e => {
            e.preventDefault()
            addExperience(formData, history)
        }} className="form">
          <div className="form-group">
            <input
              onChange={(e) => onChange(e)}
              type="text"
              placeholder="* Job Title"
              name="title"
              value={title}
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => onChange(e)}
              value={company}
              type="text"
              placeholder="* Company"
              name="company"
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => onChange(e)}
              type="text"
              placeholder="Location"
              value={location}
              name="location"
            />
          </div>
          <div className="form-group">
            <h4>From Date</h4>
            <input
              type="date"
              onChange={(e) => onChange(e)}
              value={from}
              name="from"
            />
          </div>
          <div className="form-group">
            <p>
              <input
                type="checkbox"
                checked={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
                value={current}
                name="current"
              />{" "}
              Current Job
            </p>
          </div>
          <div className="form-group">
            <h4>To Date</h4>
            <input
              value={to}
              onChange={(e) => onChange(e)}
              type="date"
              name="to"
              disabled={toDateDisabled ? 'disabled' : ''}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={(e) => onChange(e)}
              value={description}
              name="description"
              cols="30"
              rows="5"
              placeholder="Job Description"
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
