import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import './Profile.css';

const form_id = 'form_id';
class MaintenanceForm extends Component {

  editOnClick = (event) => {
    event.preventDefault()
    const data = !(this?.props?.status?.edit)
    this.props.setStatus({
      edit: data,
    })
  }
    
  cancelOnClick = (event) => {
    event.preventDefault();
    this.props.resetForm();
    this.props.setStatus({
      edit: false,
    });
  }

  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar container my-3">
        {
          this?.props?.status?.edit 
          ? 
          <React.Fragment>
            <button className="btn btn-primary btn-sm" type="submit" form={form_id}>Save</button> 
            <button className="btn btn-danger btn-sm" onClick={this.cancelOnClick} style={{marginLeft: "8px"}}>Cancel</button>
          </React.Fragment>
          : 
          <button className="btn btn-primary btn-sm" onClick={this.editOnClick}>Edit</button> 
        }
        </div>
      </React.Fragment>
    );
  }

  _renderFormView = () => {
    return (
      <React.Fragment>
          <div className="container my-3">
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Upload your Resume:</label>
          <div className="col-sm-6">
            <label type="text" name="name" className="form-control">
              {this?.props?.fields?.upload}
            </label>
          </div>
        </div>
        <hr />
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Name:</label>
          <div className="col-sm-6">
            <label type="text" name="brand_name" className="form-control"> 
              {this?.props?.fields?.name}
            </label>
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Email:</label>
          <div className="col-sm-6">
            <label type="email" name="brand_name" className="form-control"> 
              {this?.props?.fields?.email}
            </label>
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Mobile no.:</label>
          <div className="col-sm-6">
            <label type="text" name="brand_name" className="form-control"> 
              {this?.props?.fields?.mobile_no}
            </label>
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Overall Experience:</label>
          <div className="col-sm-6">
            <label type="text" name="brand_name" className="form-control"> 
              {this?.props?.fields?.experience}
            </label>
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Availability:</label>
          <div className="col-sm-6">
            <label type="text" name="device_type" className="form-control">
              {this?.props?.fields?.availability}
            </label>
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }

  _renderFormInput = () => {
    return (
      <React.Fragment>
          <div className="container my-3">
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Upload your resume:</label>
          <div className="col-sm-6">
            <Field type="text" name="upload" className="form-control" placeholder="Lets start upload your resume->" />
          </div>
        </div>
        <hr />
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Name</label>
          <div className="col-sm-6">
            <Field type="text" name="name" className="form-control" placeholder="John Doe" />
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Email</label>
          <div className="col-sm-6">
            <Field type="email" name="email" className="form-control" placeholder="v4vishnu14@gmail.com" />
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Mobile no.</label>
          <div className="col-sm-6">
            <Field type="text" name="mobile_no" className="form-control" placeholder="+355 434 234 242 3" />
          </div>
        </div>
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Overall Experience</label>
          <div className="col-sm-6">
            <Field type="text" name="experience" className="form-control" placeholder="7 years/ 0 years remote" />
          </div>
        </div>
        
        
        <div className="form-group row my-3">
          <label className="col-sm-6 col-form-label">Availability:</label>
          <div className="col-sm-6">
            <Field type="text" name="availability" className="form-control" placeholder="Full time" />
          </div>
        </div>
        </div>
      </React.Fragment>        
    );
  }

  render() {
    return (
      <React.Fragment>
        {this._renderAction()}
        <Form id={form_id}>
        {
          this?.props?.status?.edit 
          ?
          this._renderFormInput()
          :
          this._renderFormView()
        }
        </Form>
        <h4>Current value</h4>
        <div>
          <pre>
            <code>{JSON.stringify(this.props.fields, null, 2)}</code>
          </pre>
        </div>
      </React.Fragment>
    );
  }
}

const Profile = withFormik({
  mapPropsToStatus: (props) =>  {
    return {
      edit: props?.edit || false,
    }
  },
  mapPropsToValues: (props) => {
    return {
      upload: props.fields.upload,
      name:props.fields.name,
      email:props.fields.email,
      experience: props.fields.experience,
      availability: props.fields.availability,
      mobile_no:props.fields.mobile_no

    }
  }, 
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    actions.setStatus({
      edit: false,
    });
  }
})(MaintenanceForm);

export default Profile;