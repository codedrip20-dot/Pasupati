export interface AboutHeroData {
  eyebrow: string;
  title: string;
  titleLineTwo: string;
  titleLineThree: string;
  description: string;
}

export interface AboutStory {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface AboutPhilosophy {
  eyebrow: string;
  title: string;
  description: string;
  statement: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface AboutData {
  hero: AboutHeroData;
  story: AboutStory;
  philosophy: AboutPhilosophy;
  values: CoreValue[];
  expertise: string[];
  promise: string;
}