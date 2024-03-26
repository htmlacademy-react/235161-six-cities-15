import './loader.css';

function Loader(): JSX.Element {
  return (
    <div className="spinner-box">
      <div className="circle-border">
        <div className="circle-core"></div>
      </div>
    </div>
  );
}

export default Loader;

