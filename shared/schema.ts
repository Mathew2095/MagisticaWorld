import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Website configuration table
export const siteConfig = pgTable("site_config", {
  id: serial("id").primaryKey(),
  mainQuote: text("main_quote").notNull().default("Магистика - открой свой собственный магический мир!"),
  aboutContent: jsonb("about_content").notNull().default({}),
  rules: jsonb("rules").notNull().default([]),
  contactLinks: jsonb("contact_links").notNull().default({}),
  features: jsonb("features").notNull().default([]),
  faqs: jsonb("faqs").notNull().default([])
});

export const insertSiteConfigSchema = createInsertSchema(siteConfig).omit({
  id: true
});

export type InsertSiteConfig = z.infer<typeof insertSiteConfigSchema>;
export type SiteConfig = typeof siteConfig.$inferSelect;

// Default site configuration
export const DEFAULT_SITE_CONFIG: InsertSiteConfig = {
  mainQuote: "Магистика - открой свой собственный магический мир!",
  aboutContent: {
    title: "О нас",
    history: [
      "Магистика была создана командой опытных мастеров и энтузиастов магического искусства. Наш проект начался как небольшое сообщество единомышленников, увлеченных мистикой и фэнтези.",
      "Сегодня мы создаем уникальный опыт для всех, кто мечтает погрузиться в магический мир, наполненный тайнами и приключениями. Наша миссия - дать каждому возможность открыть свой собственный путь в волшебство.",
      "Присоединяйтесь к нам и станьте частью этой удивительной истории!"
    ],
    imageUrl: "https://images.unsplash.com/photo-1549241520-425e3dfc01cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    imageCaption: "Мир бесконечных возможностей"
  },
  features: [
    {
      id: 1,
      icon: "magic",
      title: "Уникальная магическая система",
      description: "Изучайте древние заклинания, создавайте магические артефакты и раскройте свой потенциал в мире Магистики."
    },
    {
      id: 2,
      icon: "users",
      title: "Дружное сообщество",
      description: "Присоединяйтесь к сотням волшебников и ведьм, исследующих мир вместе. Найдите новых друзей и союзников!"
    },
    {
      id: 3,
      icon: "map-marker",
      title: "Обширный мир для исследования",
      description: "Исследуйте таинственные земли, древние подземелья и магические леса, полные чудес и опасностей."
    }
  ],
  rules: [
    {
      id: 1,
      title: "Уважение к участникам",
      description: "Относитесь с уважением ко всем обитателям Магистики. Недопустимо оскорбление, унижение или дискриминация по любому признаку. Помните, что за каждым персонажем стоит реальный человек."
    },
    {
      id: 2,
      title: "Честная игра",
      description: "Использование любых недобросовестных методов, обхода механик игры или чит-программ строго запрещено. Игра должна быть честной и приносить удовольствие всем."
    },
    {
      id: 3,
      title: "Соблюдение тематики",
      description: "Мир Магистики имеет свою атмосферу и лор. Просим соблюдать тематику при общении, создании персонажа и всех ваших действиях для поддержания погружения в игровой мир."
    },
    {
      id: 4,
      title: "Модерация контента",
      description: "Создаваемый вами контент должен соответствовать общепринятым нормам. Запрещены материалы для взрослых, насилие, политика и другие сенситивные темы, не соответствующие тематике игры."
    }
  ],
  contactLinks: {
    discord: "https://discord.magistica.fun",
    telegram: "https://tg.magistica.fun",
    email: "support@magistica.fun"
  },
  faqs: [
    {
      id: 1,
      question: "Как начать игру в Магистику?",
      answer: "Чтобы начать свое путешествие в мире Магистики, зарегистрируйтесь на нашем сайте, создайте персонажа, выберите свой путь магии и следуйте вступительному квесту, который познакомит вас с основными механиками игры."
    },
    {
      id: 2,
      question: "Что делать, если я забыл пароль?",
      answer: "На странице входа нажмите \"Забыли пароль?\" и следуйте инструкциям для восстановления доступа. Вам потребуется доступ к электронной почте, указанной при регистрации."
    }
  ]
};
