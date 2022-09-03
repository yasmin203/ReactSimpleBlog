import {Link} from 'react-router-dom'
import styles from './styles.css'

 const ErrorRoute = () => {
  return (
    <div className='error'>
        <h1>Page Not Found</h1>
        <Link className='go-home' to="/">Go Home</Link>
    </div>
  )
}
export default ErrorRoute