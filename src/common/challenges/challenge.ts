/* eslint-disable @typescript-eslint/camelcase */

export interface Challenge {
  readonly id: string;
  order: number;
  titel: string;
  iconUrl: string;
  storyBefore: string;
  storyBeforeUrl: string;
  beschreibung: string;
  material: string[];
  anleitung: string[];
  attachments: string[];
  storyAfter: string;
  storyAfterUrl: string;
}

export interface ChallengeDto {
  readonly id: string;
  readonly order: number;
  readonly titel: string;
  readonly icon_url: string;
  readonly story_before: string;
  readonly story_before_url: string;
  readonly beschreibung: string;
  readonly material: string[];
  readonly anleitung: string[];
  readonly attachments: string[];
  readonly story_after: string;
  readonly story_after_url: string;
}

export class Challenge {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public readonly id: string,
    public order: number,
    public titel: string,
    public iconUrl: string,
    public storyBefore: string,
    public storyBeforeUrl: string,
    public beschreibung: string,
    public material: string[],
    public anleitung: string[],
    public attachments: string[],
    public storyAfter: string,
    public storyAfterUrl: string,
  ) { }

  static fromDto(dto: ChallengeDto) {
    return new Challenge(
      dto.id,
      dto.order,
      dto.titel,
      dto.icon_url,
      dto.story_before,
      dto.story_before_url,
      dto.beschreibung,
      dto.material,
      dto.anleitung,
      dto.attachments,
      dto.story_after,
      dto.story_after_url,
    );
  }

  /* public toDto(): ChallengeDto {
    return {
      id: this.id,
      order: this.order,
      title: this.title,
      body: this.body,
      icon_url: this.iconUrl,
    };
  } */
}
