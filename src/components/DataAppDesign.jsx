export default function DataAppDesign() {
  const plans = [
    { network: 'MTN', size: '1GB', price: '₦350' },
    { network: 'Airtel', size: '2GB', price: '₦700' },
    { network: 'Glo', size: '5GB', price: '₦1,500' },
    { network: '9mobile', size: '10GB', price: '₦2,800' },
  ];

  const transactions = [
    {
      id: '#TX1023',
      type: 'Data Purchase',
      amount: '-₦700',
      status: 'Successful',
    },
    {
      id: '#TX1024',
      type: 'Wallet Funding',
      amount: '+₦5,000',
      status: 'Successful',
    },
    {
      id: '#TX1025',
      type: 'Airtime Purchase',
      amount: '-₦500',
      status: 'Pending',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-green-700 mb-8">
            DATA APP
          </h1>

          <div className="space-y-4">
            <button className="w-full bg-green-600 text-white py-3 rounded-2xl font-semibold">
              Dashboard
            </button>
            <button className="w-full bg-gray-100 py-3 rounded-2xl font-semibold">
              Buy Data
            </button>
            <button className="w-full bg-gray-100 py-3 rounded-2xl font-semibold">
              Buy Airtime
            </button>
            <button className="w-full bg-gray-100 py-3 rounded-2xl font-semibold">
              Wallet
            </button>
            <button className="w-full bg-gray-100 py-3 rounded-2xl font-semibold">
              Transactions
            </button>
            <button className="w-full bg-red-100 text-red-600 py-3 rounded-2xl font-semibold">
              Logout
            </button>
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          {/* Header */}
          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Welcome Back 👋</h2>
              <p className="text-gray-500">Manage your data sales business easily.</p>
            </div>

            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <div className="bg-green-100 text-green-700 px-5 py-3 rounded-2xl font-bold">
                Wallet: ₦12,500
              </div>
              <button className="bg-green-600 text-white px-5 py-3 rounded-2xl font-semibold">
                Fund Wallet
              </button>
            </div>
          </div>

          {/* Login & API Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">User Login</h3>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-2xl p-3"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-2xl p-3"
                />

                <button className="w-full bg-green-600 text-white py-3 rounded-2xl font-semibold">
                  Login
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">API Integration</h3>

              <div className="space-y-4 text-sm">
                <div className="bg-gray-100 rounded-2xl p-4">
                  <p className="font-semibold">API Provider</p>
                  <p className="text-gray-500">VTU / SME Data API</p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-4">
                  <p className="font-semibold">API Endpoint</p>
                  <p className="text-gray-500 break-all">
                    https://api.example.com/data/purchase
                  </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-4">
                  <p className="font-semibold">Status</p>
                  <p className="text-green-600 font-bold">Connected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Plans */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Buy Data</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
                Refresh Plans
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-3xl p-5 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold">{plan.network}</h4>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      SME
                    </span>
                  </div>

                  <p className="text-3xl font-bold mb-2">{plan.size}</p>
                  <p className="text-gray-500 mb-4">Valid for 30 Days</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-700">
                      {plan.price}
                    </span>

                    <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6">Recent Transactions</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3">Transaction ID</th>
                    <th className="pb-3">Type</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {transactions.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4">{item.id}</td>
                      <td>{item.type}</td>
                      <td>{item.amount}</td>
                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            item.status === 'Successful'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2">Secure Authentication</h4>
              <p className="text-gray-500">
                User registration, login, password reset, and OTP verification.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2">Wallet System</h4>
              <p className="text-gray-500">
                Fund wallet using Paystack, Flutterwave, or Monnify integration.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2">API Automation</h4>
              <p className="text-gray-500">
                Connect directly to VTU APIs for instant airtime and data delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}