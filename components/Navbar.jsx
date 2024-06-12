import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <div className="link-container">
        <ul>
            <li><Link href='/'>home</Link></li>
            <li><Link href='/about'>about</Link></li>
            <li><Link href='/portfolio'>portfolio</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar