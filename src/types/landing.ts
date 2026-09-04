export interface DictionaryItem {
  emoji: string;
  title: string;
  desc: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
  accent: string;
}

export interface TechCardItem {
  icon: string;
  badge: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface FloatingEmojiItem {
  emoji: string;
  top: string;
  left?: string;
  right?: string;
  size: string;
  delay: string;
  duration: string;
}
