// components/Footer.js
'use client'

export default function Footer({ config }) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {config.name.charAt(0)}
                </span>
              </div>
              <span className="font-bold text-xl">
                {config.name}
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Excellence in {config.type === 'coaching' ? 'education' : config.type === 'bakery' ? 'baking' : 'dining'} and service delivery. 
              {config.type === 'coaching' && " Transforming lives through quality learning experiences."}
              {config.type === 'bakery' && " Creating delicious memories with every bite."}
              {config.type === 'restaurant' && " Creating exceptional dining experiences."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>{config.contact.phone}</p>
              <p>{config.contact.email}</p>
              <p className="text-sm">{config.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {config.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
