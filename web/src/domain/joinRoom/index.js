function JoinRoom() {
  return (
    <form className="flex flex-col" method="POST" action="#">
      <div className="mb-6 pt-3 rounded bg-gray-200">
        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
        />
      </div>
      <div className="mb-6 pt-3 rounded bg-gray-200">
        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="room-code">
          Room code
        </label>
        <input
          type="text"
          id="room-code"
          className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
        />
      </div>
      <button
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        type="submit"
      >
        Join Game
      </button>
    </form>
  );
}

export default JoinRoom;
