import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import { Sparkles, Zap, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Landing() {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
      title: "1. Consultation",
      description: "We assess your tattoo and plan to create a personalized, safe removal plan tailored just for you.",
    },
    {
      icon: <Zap className="h-8 w-8 text-cyan-400" />,
      title: "2. Treatment",
      description: "Our advanced Q-switched laser technology safely and effectively breaks down the tattoo ink in your skin.",
    },
    {
      icon: <Heart className="h-8 w-8 text-cyan-400" />,
      title: "3. Aftercare",
      description: "We provide comprehensive aftercare instructions and support to ensure your skin heals beautifully.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-100 dark:from-cyan-950 dark:via-blue-950 dark:to-purple-950" />
      
      {/* Blurred Gradient Orbs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl -z-10" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -z-10" />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <div className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl px-6 py-3 shadow-lg">
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  ✨ Kenya's Premier Laser Tattoo Removal
                </span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Your Clean Slate
              <br />
              <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Awaits
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Experience safe, effective, and professional laser tattoo removal.
              Begin your journey to clear skin today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/packages">
                <Button size="lg" className="rounded-full px-8 backdrop-blur-sm bg-primary/90 hover:bg-primary shadow-lg">
                  View Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="rounded-full px-8 backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20">
                  See Before & After
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16"
          >
            <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1200&h=600&fit=crop"
                  alt="Laser tattoo removal"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to clear, beautiful skin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Results, Clear Skin
            </h2>
            <p className="text-xl text-muted-foreground">
              See the transformations our clients have achieved
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=400&fit=crop"
                    alt="Before treatment"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <p className="text-center font-semibold">Before Treatment</p>
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop"
                    alt="After treatment"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <p className="text-center font-semibold">After Treatment</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link to="/gallery">
                  <Button size="lg" variant="outline" className="rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20">
                    View Gallery
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Packages</h2>
            <p className="text-xl text-muted-foreground">
              Choose a plan that works for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Small Tattoo", price: "KES 5,000", popular: false },
              { name: "Full Sleeve", price: "KES 25,000", popular: true },
              { name: "Custom Plan", price: "KES 15,000", popular: false },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`backdrop-blur-xl border rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all ${
                  pkg.popular
                    ? "bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-400/50 scale-105"
                    : "bg-white/10 dark:bg-black/10 border-white/20"
                }`}>
                  {pkg.popular && (
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-400/30">
                        POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                    {pkg.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Professional consultation", "Advanced laser tech", "Post-care support"].map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/packages">
                    <Button className="w-full rounded-full backdrop-blur-sm" variant={pkg.popular ? "default" : "outline"}>
                      Learn More
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/20 rounded-3xl p-12 shadow-2xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Become an Ambassador
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Love your results? Share your journey and earn rewards! Our Ambassador Program offers exclusive discounts and access for every successful referral.
              </p>
              <Link to="/training">
                <Button size="lg" className="rounded-full px-8 backdrop-blur-sm bg-primary/90 hover:bg-primary shadow-lg">
                  Join the Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}