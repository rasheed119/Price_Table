import './App.css';
import check from './check.svg'
import cross from './cross.svg'

function App() {
  
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <FreeTier/>
          <Plus/>
          <Pro/>
        </div>
      </div>
    </section>
  );
}

function FreeTier(){
  return(
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            free
          </h5>
          <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
          <hr></hr>
          <ul className="fa-ul">
            <li><span><img src={check} alt='logo'></img></span>Single User</li>
            <li><span><img src={check} alt='logo'></img></span>5GB Storage</li>
            <li><span><img src={check} alt='logo'></img></span>Unlimited Public Projects</li>
            <li><span><img src={check} alt='logo'></img></span>Community Access</li>
            <li className='text-muted'><span><img src={cross} alt='cross'></img></span>Unlimited Private Projects</li>
            <li className='text-muted'><span><img src={cross} alt='cross'></img></span>Dedicated
                Phone Support</li>
            <li className='text-muted'><span><img src={cross} alt='cross'></img></span>Free Subdomain</li>
            <li className='text-muted'><span><img src={cross} alt='cross'></img></span>Monthly Status Reports</li>
            <div className='d-grid'>
              <a href='#' className='btn btn-primary'>Button</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
function Plus(){
  return(
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            plus
          </h5>
          <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
          <hr></hr>
          <ul className="fa-ul">
            <li><span><img src={check} alt='logo'></img></span><strong>5 Users</strong></li>
            <li><span><img src={check} alt='logo'></img></span>50GB Storage</li>
            <li><span><img src={check} alt='logo'></img></span>Unlimited Public Projects</li>
            <li><span><img src={check} alt='logo'></img></span>Community Access</li>
            <li><span><img src={check} alt='cross'></img></span>Unlimited Private Projects</li>
            <li><span><img src={check} alt='cross'></img></span>Dedicated
                Phone Support</li>
            <li><span><img src={check} alt='cross'></img></span>Free Subdomain</li>
            <li className='text-muted'><span><img src={cross} alt='cross'></img></span>Monthly Status Reports</li>
            <div className='d-grid'>
              <a href='#' className='btn btn-primary'>Button</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
function Pro(){
  return(
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            pro
          </h5>
          <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
          <hr></hr>
          <ul className="fa-ul">
            <li><span><img src={check} alt='logo'></img></span><strong>Unlimited Users</strong></li>
            <li><span><img src={check} alt='logo'></img></span>150GB Storage</li>
            <li><span><img src={check} alt='logo'></img></span>Unlimited Public Projects</li>
            <li><span><img src={check} alt='logo'></img></span>Community Access</li>
            <li ><span><img src={check} alt='cross'></img></span>Unlimited Private Projects</li>
            <li ><span><img src={check} alt='cross'></img></span>Dedicated
                Phone Support</li>
            <li ><span><img src={check} alt='cross'></img></span><strong>Unlimited</strong> Free Subdomain</li>
            <li><span><img src={check} alt='cross'></img></span>Monthly Status Reports</li>
            <div className='d-grid'>
              <a href='#' className='btn btn-primary'>Button</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
