import { useState } from "react"
import { MdCheckCircleOutline } from "react-icons/md";

const SearchBar = () => {

  const [item, setItem] = useState('')
  const [listItem, setListItem] = useState([])
  const [isErr,setErr] = useState(false)
  
  const handleAdd = (e) => {
    e.preventDefault()
    item ? (setListItem([...listItem,item]),setItem(""),setErr(false)) : setErr(true)
  }

  const handleDone = (itemKey) => {
    const filteredList = listItem.filter((item, index) => itemKey !== index)
    setListItem(filteredList)
  }

  return (
    <>
      <div className="flex mt-11 flex-col">
        <h1 className="text-center m-3 font-bold text-2xl">Todo List</h1>
        <div className="flex justify-center m-3">
          <form className="mt-6"  onSubmit={handleAdd}>
              <div className="relative max-w-lg">
                <input
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                  id="text"
                  type="text"
                  placeholder="type here..."
                />
                <button type="submit" className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                  Add
                </button>
            </div>
            {isErr && <p className="text-center"><strong className="text-red-600">Empty task !</strong></p>}
            </form>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="p-1">
          <ul>
            <div >
              {listItem.map((item, key) => {
                return (
                  <>
                      <div key={key} className="w-80 flex flex-row justify-between">
                        <li className="whitespace-normal break-all m-4 hover:animate-spin">{item}
                        </li>
                      <div className="place-self-center ml-3 cursor-pointer">
                        <MdCheckCircleOutline color="green" onClick={()=> handleDone(key)}/>
                      </div>
                  </div>
                  </>
                )
              })}
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SearchBar