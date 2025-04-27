import { users, type User, type InsertUser, siteConfig, type SiteConfig, type InsertSiteConfig, DEFAULT_SITE_CONFIG } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Site configuration methods
  getSiteConfig(): Promise<SiteConfig>;
  updateSiteConfig(config: Partial<InsertSiteConfig>): Promise<SiteConfig>;
  resetSiteConfig(): Promise<SiteConfig>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private config: SiteConfig;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
    
    // Initialize with the default site configuration
    this.config = {
      id: 1,
      ...DEFAULT_SITE_CONFIG
    };
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getSiteConfig(): Promise<SiteConfig> {
    return this.config;
  }
  
  async updateSiteConfig(config: Partial<InsertSiteConfig>): Promise<SiteConfig> {
    this.config = {
      ...this.config,
      ...config
    };
    return this.config;
  }
  
  async resetSiteConfig(): Promise<SiteConfig> {
    this.config = {
      id: this.config.id,
      ...DEFAULT_SITE_CONFIG
    };
    return this.config;
  }
}

export const storage = new MemStorage();
