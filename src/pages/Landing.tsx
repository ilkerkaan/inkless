import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";
import { Sparkles, Zap, Heart, ArrowRight, CheckCircle2, Loader2, Target, Droplets, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Landing() {
  const galleryImages = useQuery(api.gallery.list);

  const howItWorksSteps = [
    {
      icon: <Target className="h-8 w-8 text-cyan-400" />,
      title: "Target",
      description: "The laser passes through the top layer of your skin, directly targeting the large ink particles without harming surrounding tissue.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
      title: "Shatter",
      description: "The ink absorbs the laser's energy and shatters into tiny, dust-like fragments.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-cyan-400" />,
      title: "Remove",
      description: "Your body's immune system naturally flushes away these small particles over the following weeks, lightening the tattoo with each session.",
    },
  ];

  const removalFactors = [
    {
      icon: <Heart className="h-6 w-6 text-cyan-400" />,
      title: "Tattoo Location",
      description: "Areas with better circulation (closer to the heart) like the chest or back often clear faster than extremities like the ankle.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-cyan-400" />,
      title: "Ink Colors",
      description: "Black ink is the easiest to remove. Vibrant blues, greens, and other colors may require specialized laser settings for optimal results.",
    },
    {
      icon: <Clock className="h-6 w-6 text-cyan-400" />,
      title: "Tattoo Age",
      description: "Older tattoos have naturally faded over time, meaning they often contain less ink and may require fewer sessions than a new one.",
    },
    {
      icon: <User className="h-6 w-6 text-cyan-400" />,
      title: "Your Lifestyle",
      description: "This is a partnership. Staying hydrated, avoiding alcohol, and protecting the area from the sun helps your body flush out ink more effectively.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-100 dark:from-black dark:via-gray-950 dark:to-gray-900" />
      
      {/* Blurred Gradient Orbs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-400/30 dark:bg-gray-700/20 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-400/30 dark:bg-gray-600/15 rounded-full blur-3xl -z-10" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 dark:bg-gray-800/10 rounded-full blur-3xl -z-10" />

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
                  ✨ Kenya's Laser Tattoo Removal Experts
                </span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Tattoos Are No Longer
              <br />
              <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Permanent
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Redefine your skin with Kenya's most advanced Picosecond laser technology. Safe, effective, and completely scar-free. Your new beginning starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/packages">
                <Button size="lg" className="rounded-full px-8 backdrop-blur-sm bg-primary/90 hover:bg-primary shadow-lg">
                  View Our Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full px-8 backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20" onClick={() => {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Learn How It Works
              </Button>
            </div>
          </motion.div>

          {/* Before & After Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16"
          >
            <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/308bf6f0-9632-4951-a07b-c2b256b044fa"
                    alt="Before treatment 1"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform"
                  />
                  <p className="text-center text-sm font-medium">Before</p>
                </div>
                <div className="space-y-2">
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/1f704a9b-5b73-4021-8a74-41e94141c996"
                    alt="After treatment 1"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform"
                  />
                  <p className="text-center text-sm font-medium">After</p>
                </div>
                <div className="space-y-2">
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/d03dabf7-72bd-4300-9279-5811ddf1259e"
                    alt="Before treatment 2"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform"
                  />
                  <p className="text-center text-sm font-medium">Before</p>
                </div>
                <div className="space-y-2">
                  <img
                    src="https://harmless-tapir-303.convex.cloud/api/storage/5c020335-158b-4527-b24c-e3a9ae852bbd"
                    alt="After treatment 2"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform"
                  />
                  <p className="text-center text-sm font-medium">After</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <Link to="/gallery">
                  <Button variant="outline" className="rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20">
                    View More Results
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Science of a Fresh Start</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our state-of-the-art Picosecond lasers make tattoo removal a simple, three-step process that works in harmony with your body.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Affects Your Removal */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Personalized Removal Plan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every journey is unique. We consider these key factors to create the perfect treatment plan for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {removalFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">{factor.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                      <p className="text-muted-foreground text-sm">{factor.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See the Difference for Yourself</h2>
            <p className="text-xl text-muted-foreground">
              From bold statements to barely-there memories. Witness the journey to ink-free skin with our advanced technology.
            </p>
          </motion.div>

          {!galleryImages ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : galleryImages.length === 0 ? (
            <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-12 text-center">
              <p className="text-muted-foreground">Gallery coming soon!</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.slice(0, 6).map((image, index) => (
                <motion.div
                  key={image._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      <div className="space-y-2">
                        <img
                          src={image.beforeImageUrl}
                          alt={`${image.title} - Before`}
                          className="w-full h-32 object-cover rounded-xl"
                        />
                        <p className="text-center font-semibold text-xs">Before</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src={image.afterImageUrl}
                          alt={`${image.title} - After`}
                          className="w-full h-32 object-cover rounded-xl"
                        />
                        <p className="text-center font-semibold text-xs">After</p>
                      </div>
                    </div>
                    <div className="p-4 pt-2">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      {image.description && (
                        <p className="text-muted-foreground text-sm line-clamp-2">{image.description}</p>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {galleryImages && galleryImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20">
                  View Full Gallery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/20 rounded-3xl p-12 shadow-2xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's talk about your path to clear skin.
              </p>
              <Link to="/packages">
                <Button size="lg" className="rounded-full px-8 backdrop-blur-sm bg-primary/90 hover:bg-primary shadow-lg">
                  Get Your Free Consultation Today
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