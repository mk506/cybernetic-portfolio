import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CloudSync Pro",
    description:
      "A real-time collaboration platform with live document editing, video conferencing, and team management features.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "#",
    live: "#",
    stars: 234,
    forks: 45,
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "Machine learning powered analytics dashboard with predictive insights, custom visualizations, and automated reporting.",
    tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    github: "#",
    live: "#",
    stars: 189,
    forks: 32,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with payment processing, inventory management, and admin dashboard.",
    tech: ["TypeScript", "Stripe", "MongoDB", "Redis"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    github: "#",
    live: "#",
    stars: 156,
    forks: 28,
  },
  {
    title: "DevOps Automation",
    description:
      "CI/CD pipeline automation tool with container orchestration, monitoring, and infrastructure as code.",
    tech: ["Docker", "Kubernetes", "Terraform", "Go"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
    github: "#",
    live: "#",
    stars: 312,
    forks: 67,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group glass rounded-2xl overflow-hidden hover-glow"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Stats Overlay */}
                <div className="absolute top-4 right-4 flex gap-3">
                  <span className="glass-strong px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    {project.stars}
                  </span>
                  <span className="glass-strong px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <GitFork className="w-4 h-4 text-primary" />
                    {project.forks}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 group"
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
