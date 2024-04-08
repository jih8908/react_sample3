import './Menu.css'

function Menu(props){
    return <div className='menu poor-story-regular'>
                <div className='menu-title'>{props.title}</div>
                <div className='menu-content'>{props.content}</div>
           </div>
}

export default Menu;