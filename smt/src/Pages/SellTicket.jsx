import React, { useState } from 'react';

function SellTicket() {
  const [ticketDetails, setTicketDetails] = useState({
    numberOfTickets: '',
    ticketType: '',
    seatingDetails: '',
    originalValue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ticket listing logic here
    console.log('Listing ticket with details:', ticketDetails);
  };

  return (
    <div className="min-h-screen bg-cyan-300">
      {/* Header */}
      <header className="bg-white py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold">
            <span className="text-black">SellMy</span>
            <span className="text-red-600">Ticket</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-black hover:text-gray-700">Buy Tickets</a>
            <a href="#" className="text-black hover:text-gray-700">Sell Tickets</a>
            <a href="#" className="text-black hover:text-gray-700">Cart</a>
            <button className="bg-black text-white px-4 py-2 rounded">
              LOGIN / SIGN-UP
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-4">
        <div className="flex flex-col items-center">
          <div className="mb-12 flex items-center">
            <div className="text-4xl font-bold flex items-center">
              <span className="inline-block mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </span>
              TICKET DETAILS
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <div className="relative bg-white rounded-xl border-2 border-black p-8 mb-10">
              {/* Ticket Shape with notches */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-cyan-300 -ml-6 rounded-r-full"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-cyan-300 -mr-6 rounded-l-full"></div>
              
              {/* Dashed line in the middle */}
              <div className="absolute left-0 top-0 bottom-0 w-1/3 border-r-2 border-dashed border-black flex items-center justify-center">
                <div className="text-6xl font-bold">₹</div>
                <input 
                  type="text" 
                  placeholder="Value" 
                  className="w-3/4 ml-4 px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              
              {/* Form fields */}
              <div className="ml-auto w-2/3 pl-12">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Number of Tickets:</label>
                    <input
                      type="number"
                      name="numberOfTickets"
                      value={ticketDetails.numberOfTickets}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                      placeholder="Value"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Ticket Type:</label>
                    <input
                      type="text"
                      name="ticketType"
                      value={ticketDetails.ticketType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                      placeholder="Value"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Seating Details:</label>
                    <input
                      type="text"
                      name="seatingDetails"
                      value={ticketDetails.seatingDetails}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                      placeholder="Value"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Original value:</label>
                    <input
                      type="number"
                      name="originalValue"
                      value={ticketDetails.originalValue}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                      placeholder="Value"
                    />
                  </div>
                </form>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-200"
              >
                LIST MY TICKET
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SellMyTicket</h3>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Page</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Page</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Page</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Page</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Page</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Page</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Page</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Page</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Page</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SellTicket;