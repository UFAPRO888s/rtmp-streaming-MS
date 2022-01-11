import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal";
import history from "../../../history";
import { fetchStream, deleteStream } from "../../../actions";
import StreamAdminForm from "../admin/StreamAdminForm";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderModal() {
    return (
      <Modal
        title="ลบ Stream"
        msg={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.deleteStream(id);
          }}
          className="ui button negative"
        >
          ลบ
        </button>
        <Link to="/" className="ui button">
          ยกเลิก
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "แน่ใจนะ ต้องการลบสตรีมรหัส: ";
    } else {
      return `แน่ใจนะ ต้องการลบสตรีมรหัส: ${this.props.stream.title}?`;
    }
  }
  render() {
    return (
      <StreamAdminForm
        stream={this.props.stream}
        currentUserId={this.props.currentUserId}
        ifHasAccess={this.renderModal()}
        errorTitle="ปฏิเสธการเข้าใช้"
        errorMsg="คุณไม่มีสิทธิ์ลบสตรีมนี้"
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
