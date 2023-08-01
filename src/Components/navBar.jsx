

const NavBar = () => {

  const list = ['home', 'contact', 'about']
  
  return (

    <>
      <div className="flex p-2 justify-between">
        <h1 className="bg-[#f0abfc] text-1xl hover:animate-spin cursor-pointer text-white rounded-full p-2"><strong>Gel</strong></h1>
        <ul>
          <div className="flex flex-column gap-5 p-2 cursor-pointer">
            {list.map((item, key) => (
              <li className="hover:animate-spin" key={key}>{item}</li>
            ))}
          </div>
          </ul>
      </div>
    </>
  )
}

export default NavBar