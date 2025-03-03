import './App.css'

function App() {
    const imageUrl = 'https://placebacon.net/400/300'

    return (
        <div>
            <nav className='flex bg-fuchsia-800 py-4 px-5 items-center justify-between'>
                <img className='w-20' src={imageUrl} alt="image of bacon" />
                <input
                    className='p-2 rounded-md bg-gray-500 text-blue-100'
                    type="text" 
                    placeholder='Search...'
                />
                <ul className='flex'>
                    <li className='mr-4 hover:text-white'><a href="/">Home</a></li>
                    <li className='mr-4 hover:text-white'>About</li>
                    <li className='hover:text-white'>Contact</li>
                </ul>
            </nav>
            <h1 className='mt-5 text-center underline text-3xl mb-5'>React Website, super cool! Ninja Chop</h1>
            <div className='block sm:flex md:block lg:flex xl:block lg:justify-center'>
                <div className='flex justify-center'>
                    <table className='border text-center max-w-full'>
                        <thead className='bg-gray-500'>
                            <tr>
                                <th className='p-5'>Name</th>
                                <th className='p-5'>Age</th>
                                <th className='p-5'>Description</th>
                                <th className='p-5'>Address</th>
                                <th className='p-5'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='px-6 py-3'>John Doe</td>
                                <td>30</td>
                                <td>Software Developer</td>
                                <td>123 Main Street</td>
                                <td className='px-6 py-3'>
                                    <button className='bg-lime-400 p-2 rounded-md mr-4'>Edit</button>
                                    <button className='bg-red-400 p-2 rounded-md'>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='px-6 py-3'>Jane Doe</td>
                                <td>29</td>
                                <td>Web Developer</td>
                                <td>123 Main Street</td>
                                <td className='px-6 py-3'>
                                    <button className='bg-lime-400 p-2 rounded-md mr-4'>Edit</button>
                                    <button className='bg-red-400 p-2 rounded-md'>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-center'>
                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='bg-gray-500 max-w-fit'>
                        <div className="flex flex-col py-5 px-5">
                            <h2 className="text-center text-2xl font-semibold text-gray-900 text-white mb-5">Login</h2>
                            <form class="max-w-sm mx-auto">
                            <div class="mb-5">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                            </div>
                            <div class="mb-5">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div class="flex items-start mb-5">
                                <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default App
