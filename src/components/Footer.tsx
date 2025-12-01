import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm flex items-center gap-1"
          >
            © {new Date().getFullYear()} Alex Chen. Made with{" "}
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> and
            lots of coffee.
          </motion.p>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary/50 hover:border-primary hover:bg-primary/10 group"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
