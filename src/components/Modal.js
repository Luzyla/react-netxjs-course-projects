function Modal(props) {
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={props.onCancel}>Cancel</button>
      <button className='btn btn' onClick={props.onConfirm}>Confirm</button>
    </div>
  );
}

export default Modal;
