import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const LocalLists = () => {
  const location = useLocation();
  const { circle } = location.state || {}; // Get circle from state

  console.log("Circle in LocalLists:", circle); // Debugging line

  const [localLists, setLocalLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (circle && circle.circle_id) {
      const fetchLocalLists = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/local-lists`, {
            params: { circle_id: circle.circle_id } // Pass circle_id as query parameter
          });
          setLocalLists(response.data);
        } catch (error) {
          setError('Failed to fetch local lists.');
        } finally {
          setLoading(false);
        }
      };

      fetchLocalLists();
    } else {
      console.error("No circle information provided in LocalLists."); // Debugging line
      setLoading(false);
      setError('No circle information provided.');
    }
  }, [circle]);

  const filteredLists = localLists.filter((list) =>
    list.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-[#6E0B00]">القوائم الأنتخابية المحلية</h1>
          
          {circle && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">الدائرة الانتخابية: {circle.name}</h2>
            </div>
          )}

          <div className="mb-6 flex justify-start">
            <input
              type="text"
              placeholder="ابحث عن قائمة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-lg px-4 py-2 text-gray-800 rounded-md border-2 border-gray-300 focus:outline-none focus:border-[#6E0B00] focus:ring-2 focus:ring-[#6E0B00] transition duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLists.map((list) => (
              <div
                key={list.id}
                className="bg-[#6E0B00] shadow-md rounded-lg p-8 transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-800 duration-300"
              >
                <h2 className="text-2xl font-bold text-white mb-4">{list.name}</h2>
                <p className="text-gray-200 text-lg">عدد المرشحين: {list.count}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocalLists;
