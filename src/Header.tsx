import './Header.scss'

function Header() {
    return (
        <>
            <div className="menu">
                <div className="logo">
                    <a href="https://michael-hruby.eu/">Michael Hrubý</a>
                </div>

                <ul className='headerLinks'>
                    <li>
                         About me
                    </li>
                    <li>
                        Projects
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
