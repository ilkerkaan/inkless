import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-white/5 dark:bg-black/5 border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.svg" alt="InklessIsMore" className="h-8 w-8" />
              <span className="font-bold text-lg">InklessIsMore.ke</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your partner for a fresh, clean slate. Professional laser tattoo removal in Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/packages" className="text-muted-foreground hover:text-primary transition-colors">Packages</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Before & After</Link></li>
              <li><Link to="/training" className="text-muted-foreground hover:text-primary transition-colors">Ambassador Program</Link></li>
              <li><Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">info@inklessismore.ke</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">+254 700 123 456</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">123 Westlands Rd, Nairobi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© 2025 InklessIsMore.ke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
