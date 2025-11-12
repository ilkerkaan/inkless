import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import ReactMarkdown from "react-markdown";

export default function About() {
  const content = useQuery(api.siteContent.get, { key: "about_us" });

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-100 dark:from-black dark:via-gray-950 dark:to-gray-900" />
      <div className="fixed top-20 left-10 w-96 h-96 bg-cyan-400/30 dark:bg-gray-700/20 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-400/30 dark:bg-gray-600/15 rounded-full blur-3xl -z-10" />

      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for professional tattoo removal
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
                      <h2>About InklessIsMore.ke</h2>
                      <p>
                        We are Kenya's premier laser tattoo removal clinic, dedicated to helping you achieve clear, clean skin safely and effectively.
                      </p>
                      <h3>Our Mission</h3>
                      <p>
                        To provide safe, effective, and professional laser tattoo removal services using the latest technology and techniques.
                      </p>
                      <h3>Our Technology</h3>
                      <p>
                        We use advanced Q-switched laser technology that targets ink particles without damaging surrounding skin tissue.
                      </p>
                      <h3>Our Team</h3>
                      <p>
                        Our certified specialists have years of experience in laser treatments and are committed to your comfort and results.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
