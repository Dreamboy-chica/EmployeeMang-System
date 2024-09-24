import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>

      <Link to="/">
      <button type="button" className="btn btn-success m-3">Home</button>
      </Link>

      <Link to="/add">
      <button type="button" className="btn btn-danger m-3">Add Data</button>
      </Link>

   {/* getbydata */}
      <Link to="/getbyid">
      <button type="button" className="btn btn-warning">View Employee</button>

    </Link>
    </div>
  )
}

export default Nav