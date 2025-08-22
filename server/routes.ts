import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    const resumePath = path.resolve(__dirname, "../attached_assets/Uzair Mustafa Resume - Metal.so 2025_1755864403747.pdf");
    
    if (!fs.existsSync(resumePath)) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.setHeader('Content-Disposition', 'attachment; filename="Uzair_Mustafa_Resume.pdf"');
    res.setHeader('Content-Type', 'application/pdf');
    
    const fileStream = fs.createReadStream(resumePath);
    fileStream.pipe(res);
  });

  // Resume view endpoint
  app.get("/api/resume/view", (req, res) => {
    const resumePath = path.resolve(__dirname, "../attached_assets/Uzair Mustafa Resume - Metal.so 2025_1755864403747.pdf");
    
    if (!fs.existsSync(resumePath)) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="Uzair_Mustafa_Resume.pdf"');
    
    const fileStream = fs.createReadStream(resumePath);
    fileStream.pipe(res);
  });

  const httpServer = createServer(app);

  return httpServer;
}