import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useNavigate, Link } from "react-router";
import { CheckCircle2, Loader2, ArrowLeft, Calendar, Mail, Phone, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";

export default function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const pkg = useQuery(api.packages.getById, { id: id as Id<"packages"> });
  const createOrder = useMutation(api.orders.create);
  
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    preferredDate: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast.error("Please sign in to book a package");
      navigate("/auth");
      return;
    }

    if (!pkg) return;

    setIsSubmitting(true);
    try {
      await createOrder({
        packageId: pkg._id,
        amount: pkg.price,
        ...formData,
      });
      toast.success("Booking submitted successfully! We'll contact you soon.");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-100 dark:from-black dark:via-gray-950 dark:to-gray-900" />
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-400/30 dark:bg-gray-700/20 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-400/30 dark:bg-gray-600/15 rounded-full blur-3xl -z-10" />

      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/packages">
            <Button variant="ghost" className="mb-8 rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Packages
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Package Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700/30 rounded-3xl p-10 shadow-2xl h-full">
                {pkg.isPopular && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <span className="inline-block px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-500/30 to-purple-500/30 dark:from-yellow-600/30 dark:to-yellow-500/20 text-cyan-700 dark:text-yellow-500 border-2 border-cyan-400/50 dark:border-yellow-600/50 shadow-lg">
                      ⭐ POPULAR CHOICE
                    </span>
                  </motion.div>
                )}
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl font-bold mb-6 leading-tight"
                >
                  {pkg.name}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <p className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-yellow-500 dark:to-yellow-600 bg-clip-text text-transparent">
                    KES {pkg.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">One-time payment</p>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-muted-foreground mb-10 leading-relaxed"
                >
                  {pkg.description}
                </motion.p>
                
                <div className="border-t border-white/10 dark:border-gray-700/30 pt-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <CheckCircle2 className="h-6 w-6 text-cyan-500 dark:text-yellow-500 mr-2" />
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-start space-x-3 group"
                      >
                        <CheckCircle2 className="h-6 w-6 text-cyan-500 dark:text-yellow-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-base leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700/30 rounded-3xl p-10 shadow-2xl sticky top-24">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">Book This Package</h2>
                  <p className="text-muted-foreground">Fill in your details to reserve your spot</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold flex items-center">
                      <User className="h-4 w-4 mr-2 text-cyan-500 dark:text-yellow-500" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      className="backdrop-blur-sm bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-600/30 rounded-xl h-12 focus:ring-2 focus:ring-cyan-500 dark:focus:ring-yellow-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-cyan-500 dark:text-yellow-500" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.customerEmail}
                      onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                      className="backdrop-blur-sm bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-600/30 rounded-xl h-12 focus:ring-2 focus:ring-cyan-500 dark:focus:ring-yellow-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-cyan-500 dark:text-yellow-500" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.customerPhone}
                      onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                      className="backdrop-blur-sm bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-600/30 rounded-xl h-12 focus:ring-2 focus:ring-cyan-500 dark:focus:ring-yellow-500 transition-all"
                      placeholder="+254 700 123 456"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-sm font-semibold flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-cyan-500 dark:text-yellow-500" />
                      Preferred Date/Time
                    </Label>
                    <Input
                      id="date"
                      placeholder="e.g., Monday, Jan 15 at 2pm"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="backdrop-blur-sm bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-600/30 rounded-xl h-12 focus:ring-2 focus:ring-cyan-500 dark:focus:ring-yellow-500 transition-all"
                    />
                    <p className="text-xs text-muted-foreground mt-2 ml-1">
                      Optional - You can also schedule upon arrival
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-sm font-semibold">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="backdrop-blur-sm bg-white/20 dark:bg-black/30 border-white/30 dark:border-gray-600/30 rounded-xl focus:ring-2 focus:ring-cyan-500 dark:focus:ring-yellow-500 transition-all resize-none"
                      placeholder="Any special requests or questions?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full h-14 text-lg font-semibold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-yellow-600 dark:to-yellow-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Book Now
                        <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By booking, you agree to our terms and conditions
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
