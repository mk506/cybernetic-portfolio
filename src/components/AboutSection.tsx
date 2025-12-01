import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import CountUp from "@/components/CountUp";

const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "GitHub Commits", value: 2000, suffix: "+" },
];

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
];

const education = [
  {
    degree: "M.S. Computer Science",
    school: "Stanford University",
    year: "2020 - 2022",
    location: "California, USA",
  },
  {
    degree: "B.S. Software Engineering",
    school: "MIT",
    year: "2016 - 2020",
    location: "Massachusetts, USA",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to crafting exceptional digital experiences
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Turning Ideas Into Reality
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a full-stack developer with a passion for building scalable web applications 
              and creating intuitive user experiences. With expertise in modern JavaScript 
              frameworks and cloud technologies, I bring ideas to life through clean, 
              efficient code.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge through technical writing and 
              mentoring aspiring developers.
            </p>
          </motion.div>

          {/* Profile Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl rotate-6 opacity-50" />
              <div className="absolute inset-0 glass rounded-2xl flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-8 text-center hover-glow group"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {isInView && (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <GraduationCap className="inline-block mr-2 text-primary" />
            Education
          </h3>
          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]" />
                <div className="glass rounded-xl p-6 ml-4 hover-glow">
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-medium mb-2">{edu.school}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Tech Stack
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass rounded-xl p-4 text-center cursor-pointer hover-glow group"
                style={{
                  boxShadow: `0 0 0px ${tech.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0px ${tech.color}`;
                }}
              >
                <span
                  className="text-lg font-medium transition-colors"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
