import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Gallery() {
  const images = useQuery(api.gallery.list);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Before & After Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Real results from our satisfied clients
            </p>
          </motion.div>

          {!images ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : images.length === 0 ? (
            <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl p-12 text-center">
              <p className="text-muted-foreground">Gallery coming soon!</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {images.map((image, index) => (
                <motion.div
                  key={image._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-3xl overflow-hidden shadow-lg">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      <div className="space-y-2">
                        <img
                          src={image.beforeImageUrl}
                          alt={`${image.title} - Before`}
                          className="w-full h-64 object-cover rounded-2xl"
                        />
                        <p className="text-center font-semibold text-sm">Before</p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src={image.afterImageUrl}
                          alt={`${image.title} - After`}
                          className="w-full h-64 object-cover rounded-2xl"
                        />
                        <p className="text-center font-semibold text-sm">After</p>
                      </div>
                    </div>
                    <div className="p-6 pt-2">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      {image.description && (
                        <p className="text-muted-foreground">{image.description}</p>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
