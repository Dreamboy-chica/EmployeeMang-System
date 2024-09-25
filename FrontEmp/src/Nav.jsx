import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='home'>

      <Link to="/">
      <h6>Home</h6>
      </Link>

      <Link to="/add">
      <h6> Add Data</h6>
     
      </Link>

   {/* getbydata */}
      <Link to="/getbyid">
      <h6>View Employee</h6>
    </Link>
    </div>
  )
}

export default Nav