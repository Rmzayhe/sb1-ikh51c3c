{/* Office Locations */}
<div className="bg-white rounded-lg shadow-md p-8">
  <h2 className="text-2xl font-semibold mb-6 text-primary-500">Our Offices</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Morocco Office */}
    <div className="flex items-start">
      <MapPin className="h-6 w-6 text-primary-500 mr-4 mt-1" />
      <div>
        <h3 className="text-lg font-semibold mb-2">Morocco Office</h3>
        <p className="text-gray-700">
          Bayti Sakan 1 Azzouzia Marakech Morocco
        </p>
        <a 
          href="https://maps.app.goo.gl/BrrSfA9oCUDD8A1w5?g_st=ac"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 mt-2 inline-block"
        >
          View on Map
        </a>
      </div>
    </div>

    {/* Georgia Office */}
    <div className="flex items-start">
      <MapPin className="h-6 w-6 text-primary-500 mr-4 mt-1" />
      <div>
        <h3 className="text-lg font-semibold mb-2">Georgia Office</h3>
        <p className="text-gray-700">
          Georgia, Tbilisi, Shandor Pettef Street, N 42, Floor 3, Block N3
        </p>
      </div>
    </div>

    {/* Estonia Office (Coming Soon) */}
    <div className="flex items-start">
      <MapPin className="h-6 w-6 text-primary-500 mr-4 mt-1" />
      <div>
        <h3 className="text-lg font-semibold mb-2">Estonia Office</h3>
        <p className="text-gray-500 italic">Coming soon</p>
      </div>
    </div>
  </div>
</div>
