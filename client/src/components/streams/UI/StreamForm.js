import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error "
        >
          <Field
            name="title"
            component={this.renderInput}
            label="ชื่อหน้าห้อง"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="เบอร์โทร or LINEID PR"
          />
          <button className="ui button primary">Submit</button>
        </form>
    );
  }
}

const validate = ({ title, description }) => {
  const errors = {};
  if (!title) {
    errors.title = "กรุณา ใส่ใจหน่อย";
  }
  if (!description) {
    errors.description = "กรุณา ใส่ใจหน่อยนะ";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
