import { FaJava } from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiFramer, 
  SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiMysql
} from "react-icons/si";
import { Database, Code, Globe, Terminal } from "lucide-react";

export function TechBadge({ tech }: { tech: string }) {
  let Icon = Terminal;
  let color = "#ffffff";

  const lowerTech = tech.toLowerCase();

  if (lowerTech.includes("java") && !lowerTech.includes("javascript")) { Icon = FaJava; color = "#ED8B00"; }
  else if (lowerTech.includes("javascript")) { Icon = SiJavascript; color = "#F7DF1E"; }
  else if (lowerTech.includes("typescript")) { Icon = SiTypescript; color = "#3178C6"; }
  else if (lowerTech.includes("react")) { Icon = SiReact; color = "#61DAFB"; }
  else if (lowerTech.includes("tailwind")) { Icon = SiTailwindcss; color = "#06B6D4"; }
  else if (lowerTech.includes("framer")) { Icon = SiFramer; color = "#0055FF"; }
  else if (lowerTech.includes("next")) { Icon = SiNextdotjs; color = "#FFFFFF"; }
  else if (lowerTech.includes("node")) { Icon = SiNodedotjs; color = "#339933"; }
  else if (lowerTech.includes("express")) { Icon = SiExpress; color = "#FFFFFF"; }
  else if (lowerTech.includes("mongo")) { Icon = SiMongodb; color = "#47A248"; }
  else if (lowerTech.includes("postgres")) { Icon = SiPostgresql; color = "#4169E1"; }
  else if (lowerTech.includes("mysql")) { Icon = SiMysql; color = "#4479A1"; }
  else if (lowerTech.includes("sql")) { Icon = Database; color = "#336791"; }
  else if (lowerTech.includes("c#")) { Icon = Code; color = "#239120"; }
  else if (lowerTech.includes("jwt")) { Icon = Code; color = "#ffffff"; }
  else if (lowerTech.includes("api") || lowerTech.includes("rest")) { Icon = Globe; color = "#ffffff"; }

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white">
      <Icon className="h-3.5 w-3.5" style={{ color }} />
      {tech}
    </div>
  );
}
