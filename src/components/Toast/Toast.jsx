import "./Toast.css";
function Toast(props) {
  return (
    <div className={props.showToast ? "toast" : "no-toast"}>
        <h4 className="toastTitle">Already exist!!!</h4>
    </div>
  );
}

export default Toast;