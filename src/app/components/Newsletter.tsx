function Newsletter() {
  return (
    <div className="h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-purple-900 ">
      <form className="flex items-center justify-center p-8 text-center">
        <ul>
          <li className="text-2xl pb-4">Newsletter</li>
          <li className="text-4xl pb-4">Subscribe and stay upto date!</li>
          {/* <label className="text-2xl block mb-2  font-medium text-gray-900 dark:text-white">
            {" "}
            Input your email
          </label> */}
          <div className="flex justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white gap-2 ">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 w-full dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Example@email.com"
            ></input>
            <button className=" bg-purple-500 hover:bg-gradient-conic rounded-md p-8 py-3">
              Submit
            </button>
          </div>
        </ul>
      </form>
    </div>
  );
}

export default Newsletter;
