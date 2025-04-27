import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get site configuration
  app.get("/api/config", async (req, res) => {
    try {
      const config = await storage.getSiteConfig();
      res.json(config);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch site configuration" });
    }
  });

  // Update site configuration
  app.patch("/api/config", async (req, res) => {
    try {
      const configSchema = z.object({
        mainQuote: z.string().optional(),
        aboutContent: z.record(z.any()).optional(),
        rules: z.array(z.object({
          id: z.number(),
          title: z.string(),
          description: z.string()
        })).optional(),
        contactLinks: z.record(z.string().url()).optional(),
        features: z.array(z.object({
          id: z.number(),
          icon: z.string(),
          title: z.string(),
          description: z.string()
        })).optional(),
        faqs: z.array(z.object({
          id: z.number(),
          question: z.string(),
          answer: z.string()
        })).optional()
      });

      const validatedData = configSchema.parse(req.body);
      const updatedConfig = await storage.updateSiteConfig(validatedData);
      res.json(updatedConfig);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid config data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to update site configuration" });
      }
    }
  });

  // Reset site configuration to defaults
  app.post("/api/config/reset", async (req, res) => {
    try {
      const config = await storage.resetSiteConfig();
      res.json(config);
    } catch (error) {
      res.status(500).json({ message: "Failed to reset site configuration" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
