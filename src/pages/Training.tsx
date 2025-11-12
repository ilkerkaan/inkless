import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Video, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router";

export default function Training() {
  const content = useQuery(api.siteContent.get, { key: "training_info" });

  const trainingOptions = [
    {
      icon: <Video className="h-12 w-12 text-cyan-400" />,
      title: "Online Training",
      description: "Self-paced video modules to learn about our process and benefits at your convenience.",
    },
    {
      icon: <Users className="h-12 w-12 text-cyan-400" />,
      title: "In-Person Training",
      description: "Visit our clinic for a comprehensive session and meet our specialists in person.",
    },
    {
      icon: <Award className="h-12 w-12 text-cyan-400" />,
      title: "Ambassador Benefits",
      description: "Earn commissions, get exclusive perks, and be part of our growing community.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-100 dark:from-black dark:via-gray-950 dark:to-gray-900" />
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-400/30 dark:bg-gray-700/20 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-400/30 dark:bg-gray-600/15 rounded-full blur-3xl -z-10" />

      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Ambassador Program</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Share your journey, earn rewards, and help others discover the path to clear skin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {trainingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">{option.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-12 shadow-lg">
              {content === undefined ? (
                <div className="flex justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              ) : (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {content ? (
                    <ReactMarkdown>{content}</ReactMarkdown>
                  ) : (
                    <div>
                      <h2>Become an Ambassador</h2>
                      <p>
                        Love your results? Share your journey and earn rewards! Our Ambassador Program offers exclusive discounts and access for every successful referral.
                      </p>
                      <h3>Benefits</h3>
                      <ul>
                        <li>Earn 10% commission on referrals</li>
                        <li>Your referrals get 20% discount</li>
                        <li>Exclusive ambassador perks</li>
                        <li>Be part of our community</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              <div className="mt-8 text-center">
                <Link to="/auth">
                  <Button size="lg" className="rounded-full px-8 backdrop-blur-sm bg-primary/90 hover:bg-primary shadow-lg">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
