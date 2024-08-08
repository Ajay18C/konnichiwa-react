const Contact = () => {
  return (
    <div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
        <input type="text" placeholder="name" className="border border-black p-2 m-2"></input>
        <input type="text" placeholder="email" className="border border-black p-2 m-2"></input>
        <button className="bg-orange-200 rounded-xl p-2 m-2">submit</button>
    </div>
  )
}

export default Contact