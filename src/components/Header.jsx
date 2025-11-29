import chefIcon from '../assets/chef-claude-icon.png'

function Header() {
  return (
    <header className='header'>
        <img className='cheficonImg' src={chefIcon} alt="Chef Claude Icon" />
        <h1>Chef Claude</h1>
    </header>
  )
}

export default Header