import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import { CheckCircle2, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Packages() {
  const packages = useQuery(api.packages.list);

  if (!packages) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-100 dark:from-cyan-950 dark:via-blue-950 dark:to-purple-950" />
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl -z-10" />

      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Packages</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that works for you. All packages are tailored to your specific needs during your free consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`backdrop-blur-xl border rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all ${
                  pkg.isPopular
                    ? "bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-400/50 scale-105"
                    : "bg-white/10 dark:bg-black/10 border-white/20"
                }`}>
                  {pkg.isPopular && (
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-400/30">
                        POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                    KES {pkg.price.toLocaleString()}
                  </p>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/packages/${pkg._id}`}>
                    <Button className="w-full rounded-full backdrop-blur-sm" variant={pkg.isPopular ? "default" : "outline"}>
                      Learn More
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
